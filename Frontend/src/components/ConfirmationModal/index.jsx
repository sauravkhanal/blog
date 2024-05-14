export default function Modal({ text, onConfirm, modalVisible, setModalVisible, onReject = () => { }, visible = false, destructive = true, }) {


    const handleReject = () => {
        setModalVisible(false);
        onReject();
    };

    const handleConfirm = () => {
        setModalVisible(false);
        onConfirm()
    };

    return (
        <>
            {modalVisible && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10"
                    onClick={handleReject}>
                    <div className="bg-white p-6 rounded-md flex flex-col justify-center max-w-xs">
                        {/* <h1 className="text-black text-2xl pb-5">{(success? "Success": "Failure")}</h1> */}
                        <p className="text-black text-xl text-center">{text}</p>
                        <span className="flex flex-row gap-5 justify-center items-center">
                            <button className={`${!destructive ? 'bg-green-600' : 'bg-red-500'} text-white rounded-md p-2 mt-5 min-w-20 self-center `} onClick={handleReject}>No</button>
                            <button className={`${destructive ? 'bg-green-onPress600' : 'bg-red-500'} text-white rounded-md p-2 mt-5 min-w-20 self-center `} onClick={handleConfirm}>Yes</button>
                        </span>
                    </div>
                </div>
            )}
        </>
    );
}
