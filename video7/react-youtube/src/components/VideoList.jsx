const VideoList = ({ title, children }) => 
    (
        <div>
            <h2>{title}</h2>
            {children || <p>No hay videos</p>}
        </div>
    )


export default VideoList