import React, { useState, useEffect } from 'react'


export default function useEffectDemo() {
    const [number, setNumber] = useState(1);

    //hook này thay thế cho lifecycle ComponentDidMouth
    useEffect(() => {//tự động kích hoạt và chạy lần đầu tiên
        //Callapi
        //Sử dụng carousel, thư viện khác ...
        console.log('componentDivMount');
        return () => {
            //hàm này sẽ thực thi trước khi component mất khỏi giao diện
            console.log('componentWillUnmount');
        }
    }, []);


    useEffect(() => {
        //gọi lại sau mỗi lần render kể cả lần đầu tiên
        console.log('thay thế 2 lifecycle componentDidMount và componentDidUpdate');
        //hạn chế setState
    });
    useEffect(() => {
        //gọi lại sau mỗi lần render kể cả lần đầu tiên
        console.log('componentDidUpdate bởi 1 state nào đó');
        //hạn chế setState
    }, [number]);


    return (
        <div>
            <h1>{number}</h1>
            <button className='btn btn-dark' onClick={() => {
                setNumber(number + 1)
            }}>+</button>
        </div>
    )
}
