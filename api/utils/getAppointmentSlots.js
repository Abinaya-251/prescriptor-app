//Generate appointment Slots for a Doctor
import timeSlotter from "time-slotter"
export const getAppointmentSlots=(starthour,startmins,endhour,endmins,slottime)=>{
    var startTime=""
    var endTime=""
    console.log(slottime)
    if(starthour<10){
        starthour= "0".concat((starthour).toString())
    }
    startTime=starthour.toString().concat(":").concat(startmins)
    endTime=endhour.toString().concat(":").concat(endmins)
    console.log(startTime,endTime)
    return timeSlotter(startTime, endTime, slottime,true)
        
}