import {useState, useEffect} from "react";

const CheckboxItem = ({item, current, handleFunc}) => {
    const [status, setStatus] = useState(false);

    const tickHandle = (stt) => {
            let check = current.includes(item.id);
            if(check){
                let tmp = current.filter(lab => lab !== item.id);
                handleFunc(tmp)
            } else{
                handleFunc([...current, item.id]);
            }
            setStatus(stt);
    }

    return (

        <div className="flex gap-4">
            <div className={`tick-box ${status ? 'active' : null}`} onClick={() => tickHandle(!status)}/> {item.name}

            <style jsx>{`
                .tick-box{
                    height: 20px;
                    width: 20px;
                    border: 1px solid #ebebeb;
                }
                .tick-box.active{
                  background: #0070f3;
                }
            `}</style>
        </div>
    )
}

export default CheckboxItem;