export default function formatTimestamp(timestamp) {
        const dateObj = new Date(timestamp)
        return dateObj.toLocaleString([], {  
            weekday: "short", 
            day: "numeric",
            month: "short",
            year : 'numeric',
            hour: "2-digit",  
            minute: "2-digit",  
            hour12: true 
    })
}