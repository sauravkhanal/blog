import { useEffect, useState } from "react";


export default function Modal({ text, visible = false, success = true, onPress }){
    const [modalVisible, setModalVisible] = useState(visible);

    useEffect(() => {
        setModalVisible(visible);
    }, [visible]);

    const handleClose = () => {
        setModalVisible(false);
        onPress()
    };

    // const autoclose = setTimeout(() => {
    //     handleClose();
    // }, 3000);

    return (
        <>
            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10" onClick={handleClose}>
                    <div className="bg-white p-6 rounded-md flex flex-col justify-center max-w-xs">
                        {/* <h1 className="text-black text-2xl pb-5">{(success? "Success": "Failure")}</h1> */}
                        <p className="text-black text-xl text-center">{text}</p>
                        <button className={`${success ? 'bg-green-600' : 'bg-red-500'} text-white rounded-md p-2 mt-5 min-w-20 self-center `} onClick={handleClose}>Ok</button>
                    </div>
                </div>
            )}
        </>
    );
}
