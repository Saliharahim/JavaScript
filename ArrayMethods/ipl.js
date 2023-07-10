var point_table=[
    {team:"GT",matches:14,won:10,loss:4,nrr:0.809,pts:20,lastFive:["w","w","l","w","w"]},
    {team:"csk",matches:14,won:8,loss:5,nrr:0.652,pts:17,lastFive:["w","w","l","w","l"]},
    {team:"srh",matches:14,won:4,loss:10,nrr:-0.590,pts:8,lastFive:["l","l","l","l","w"]},
    {team:"dc",matches:14,won:5,loss:9,nrr:-0.80,pts:10,lastFive:["l","w","l","l","w"]},
    {team:"mi",matches:14,won:8,loss:6,nrr:-0.44,pts:16,lastFive:["w","l","w","w","l"]},
    {team:"rcb",matches:14,won:7,loss:7,nrr:+1.39,pts:14,lastFive:["l","w","w","l","l"]},
]

// array of objects

// q1: print all team names

var team_name=point_table.map(t=>t.team)
// console.log(team_name);

// q2: sort teams with respect to pts

point_table.sort((t1,t2)=>t2.pts-t1.pts)
// console.log(point_table);

// q3:print teams with +ve nrr
var pos_nrr=point_table.filter(t=>t.nrr>0).map(t=>t.team)
// console.log(pos_nrr);

// q4:qualifiers

var qualifiers=point_table.sort((t1,t2)=>t2.pts-t1.pts).slice(0,4).map(t=>t.team)
// console.log(qualifiers);

// q5:team names with atleast 5 won

var team_gt_five=point_table.filter(t=>t.won>=5).map(t=>t.team)
// console.log(team_gt_five);


// q6:team with max points

var max_points=point_table.reduce((t1,t2)=>t1.pts>t2.pts?t1:t2).team
// console.log(max_points);

//q7: team's which have won the last game

var teams=point_table.filter(t=>t.lastFive.slice(0,1)=="w").map(t=>t.team)
// console.log(teams);


// q8:is kt playing 2023 ipl?
// some()
var is_playing=point_table.some(t=>t.team=="kt")
console.log(is_playing);