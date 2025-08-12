import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
    const{roomId}=useParams();
    const containerRef=useRef(null);
    useEffect(() => {
        const appId = 746982206;
        const serverSecret = "359d50b91ef57bf30110ea8874b773e9";

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Souvik Biswas"
        );

        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: containerRef.current,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `${window.location.origin}/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
        });
    }, [roomId]);

  return (
    <div>
        <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />
    </div>
  )
}

export default Room