const { request } = require('urllib');

async function run(){
    const { data, res } = await request('http://data.nba.net/10s/prod/v1/2016/players.json');
    console.log(data.toString())
}
run()