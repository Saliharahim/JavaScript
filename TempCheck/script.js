function dgreeToFh(){
    let degr=+id_deg.value
    let fh=(degr*(9/5))+32
    id_fh.value=fh

}
function fhToDegree(){
    let fh=+id_fh.value
    let deg=(fh-32)*5/9
    id_deg.value=deg

}