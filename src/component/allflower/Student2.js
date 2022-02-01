import React from 'react';
import Flower from '../Flower';
import { Link } from 'react-router-dom';
export default function Student2({data, state}) {
    const student = data;
    var codeAverage = 0;
    var planAverage = 0;
    var designAverage = 0;
    var presentationAverage = 0;
    var communicationAverage = 0;

    if(typeof student.evalutions !== 'undefined' && student.evalutions.length !== 0){
        
        const studentArrayLenghth = data.evalutions.length
         codeAverage = Math.round((student.total_scores.code / studentArrayLenghth));
         planAverage = Math.round((student.total_scores.plan / studentArrayLenghth));
         designAverage = Math.round((student.total_scores.design / studentArrayLenghth));
         presentationAverage = Math.round((student.total_scores.presentation / studentArrayLenghth));
         communicationAverage = Math.round((student.total_scores.communication / studentArrayLenghth));
    
    }

  return (
      <a href={`https://young-wave-90140.herokuapp.com/students/${student.id}`}>
        <Flower state = {state} number = {student.booth_number}  codeAverage={codeAverage} planAverage={planAverage} designAverage = { designAverage} communicationAverage = {communicationAverage} presentationAverage = {presentationAverage} />
      </a>
  )
}
