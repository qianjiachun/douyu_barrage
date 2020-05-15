function getLocalTime(nS :any) { 
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "); 
} 

function timeString2Timestamp(str: string): string{
    // 传入2020-05-15 11:00:00 这样的字符串 转换成时间戳
    return Math.round(new Date(str).getTime() / 1000).toString();
}

function getNextDate(day: number): string {  
    let dd: Date = new Date();
    dd.setDate(dd.getDate() + day);
    let y = dd.getFullYear();
    let m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
    let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return y + "-" + m + "-" + d;
  };

export default {
    getLocalTime,
    timeString2Timestamp,
    getNextDate,
}