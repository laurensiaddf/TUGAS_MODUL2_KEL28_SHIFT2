import React, { Component } from 'react';
import Select from '../elements/Select';
import 'antd/dist/antd.css';
import { Card } from 'antd';

//function components
function CardSaya(props) {
    return (
        <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
            <img style={{maxWidth:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src={props.src}></img>
            <p style={{margin:'2px'}}>{props.nama}</p>
            <p style={{margin:'2px'}}>{props.nim}</p>
            <Select>
                <option value="">Kelas</option>
                <option value="1">A</option>
                <option value="2">B</option>
            </Select>
        </Card>
    );
}

//class components
export default class MyCard extends Component {
    render() {
        return (
           <div style={{textAlign:'center', fontFamily:'Roboto', fontSize:'24px', margin:'25px'}}>
               <CardSaya src="https://i.ibb.co/Gskw0Dn/Laurensia.jpg" nama="Laurensia Divina Dewi Fortuna" nim="21120117120010"></CardSaya>
               <CardSaya src="https://i.ibb.co/KWnJPm2/Mahani.jpg" nama="Mahani Halwa" nim="21120117140016"></CardSaya>
           </div>    
        )
    }
}