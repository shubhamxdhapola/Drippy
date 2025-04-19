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

console.log(formatTimestamp('2025-04-14T17:11:26.597+00:00'))