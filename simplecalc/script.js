function add(){
    let n1=+id_tbox1.value
    let n2=+id_tbox2.value
    res=n1+n2
    document.querySelector('#id_result').innerHTML=`RESULT =${res}`
}

function sub(){
    let n1=+id_tbox1.value
    let n2=+id_tbox2.value
    res=n1-n2
    // alert(res)
    document.querySelector('#id_result').innerHTML=`RESULT =${res}`

}