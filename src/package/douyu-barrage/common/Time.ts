function getLocalTime(nS :any) { 
    return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " "); 
} 

export default {
    getLocalTime,
}