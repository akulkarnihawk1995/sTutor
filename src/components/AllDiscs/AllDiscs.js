import React, {useState, useEffect} from "react";
import "./AllDiscs.css";
import axios from "axios";

function AllDiscs(props){

    let userId=props.match.params.id.slice(3,);
    let places=[]
    let discussions = []
    const [allData, setAllData] = useState({})


    function handleJoinGroup(discId){
        axios.put("http://localhost:5000/discussions/addAttendee/" + discId + "/" + userId);
    }
    function retreiveAllPending(){
        return new Promise((resolve, reject)=>{
            axios.get("http://localhost:5000/users/getId/"+userId)
            .then(resp=>{
                axios.get("http://localhost:5000/places/getPlaces/" + resp.data[0].college)
                .then(res=>{
                    res.data.forEach(place=>{
                        places.push(place.place);
                        discussions.push([]);
                        axios.get("http://localhost:5000/discussions/getPending/" + place._id)
                        .then(pendingDiscs=>{
                            pendingDiscs.data.forEach((disc, index)=>{
                                axios.get("http://localhost:5000/topics/"+disc.topic)
                                .then(top=>{
                                    if(top.data.length===0){
                                        discussions[discussions.length-1].push({});
                                    }
                                    else{
                                        let obj = {start: disc.start_time, duration:disc.duration, max_attendees:disc.max_attendees,topic_name :top.data[0].topic_name,
                                            author : top.data[0].author,discussion : top.data[0].discussion_material,subject : top.data[0].subject, _id: disc._id, present_attendees:disc.present_attendees}
                                        discussions[discussions.length-1].push(obj);
                                    }
                                    if(discussions.length===res.data.length && index===pendingDiscs.data.length - 1){
                                        setAllData({places:places, discussion:discussions});
                                        resolve("done");
                                    }
                                })
                            })
                        })
                    })
                })
            })
        })
    }
    let cards = [];
    useEffect(()=>{
        retreiveAllPending();
    },[]);

    if(allData.places !==undefined){
        let pl = allData.places;
        let disc = allData.discussion;
            for(let i=0;i<pl.length;i++){
                if(disc[i].length===0) continue;
                else{
                    async function updateCards(){
                        await disc[i].forEach((d, index)=>{
                            if (d.topic_name !==undefined){
                                if(d.present_attendees !==undefined && d.present_attendees.includes(userId)){
                                    cards.push(<div key={index} className="card join-group">
                                                <div className="card-body">
                                                    <div className="card-title">Topic: {d.topic_name}</div>
                                                    <div className="card-text">Discussion: {d.discussion}</div>
                                                    <div>Duration: {d.duration}</div>
                                                    <div>Start Time: {d.start}</div>
                                                    <div>Max Attendees: {d.max_attendees}</div>
                                                    <div style={{color:"red"}}>Attending</div>
                                                </div>
                                            </div>)
                                }
                                else{
                                    cards.push(<div key={index} className="card join-group" onClick={()=> handleJoinGroup(d._id)}>
                                                <div className="card-body">
                                                    <div className="card-title">Topic: {d.topic_name}</div>
                                                    <div className="card-text">Discussion: {d.discussion}</div>
                                                    <div>Duration: {d.duration}</div>
                                                    <div>Start Time: {d.start}</div>
                                                    <div>Max Attendees: {d.max_attendees}</div>
                                                </div>
                                            </div>)
                                }
                            }
                        })
                    }
                    updateCards();
                }
            }
    }

    return <div className="container">
            {cards}
    </div>
}

export default AllDiscs;