import axios from 'axios';
import { Barrages, LineData } from '../interfaces';
import qs from 'qs';

const queryBarrage_id = (rid: string, id: string, minTime: string, maxTime: string, page: string): Promise<Barrages> => {
    return new Promise<Barrages> (resolve => {
        axios({
            method: "POST",
            url: "http://122.51.5.63:27999/douyu/db/barrage/queryBarrage_id",
            responseType: "json",
            headers: {

            },
            data: qs.stringify({
                rid: rid,
                id: id,
                minTime: minTime,
                maxTime: maxTime,
                page: page,
            })
        }).then((ret) => {
            resolve(ret.data);
        })
    })
};

const queryBarrage_uid = (rid: string, uid: string, minTime: string, maxTime: string, page: string): Promise<Barrages> => {
    return new Promise<Barrages> (resolve => {
        axios({
            method: "POST",
            url: "http://122.51.5.63:27999/douyu/db/barrage/queryBarrage_id",
            responseType: "json",
            headers: {

            },
            data: qs.stringify({
                rid: rid,
                uid: uid,
                minTime: minTime,
                maxTime: maxTime,
                page: page,
            })
        }).then((ret) => {
            resolve(ret.data);
        })
    })
};


const queryBarrageNum_time = (rid: string, minTime: string, maxTime: string): Promise<LineData> => {
    return new Promise<LineData> (resolve => {
        axios({
            method: "POST",
            url: "http://122.51.5.63:27999/douyu/db/barrage/queryBarrageNum_time",
            responseType: "json",
            headers: {
            },
            data: qs.stringify({
                rid: rid,
                minTime: minTime,
                maxTime: maxTime,
            })
        }).then((ret) => {
            resolve(ret.data);
        })
    })
};



export default {
    queryBarrage_id,
    queryBarrage_uid,
    queryBarrageNum_time,
}