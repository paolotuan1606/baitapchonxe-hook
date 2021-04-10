import React, { useState } from 'react'

export default function BaiTapChonXe() {

    const [state, setstate] = useState({ img: './car/products/black-car.jpg' })

    return (
        <div className='container'>
            <h1 className='display-4 '>Bài tập chọn xe</h1>
            <div className='row mt-5'>
                <div className='col-6'>
                    <img src={state.img} className="w-100" alt="" />
                </div>
                <div className='row ml-5'>
                    <div className='col-3'>
                        <button className='btn btn-dark' style={{ maxWidth: 100, maxHeight: 60 }}
                            onClick={() => {
                                setstate({ img: './car/products/black-car.jpg' })
                            }
                            }>Black car</button>
                    </div>
                    <div className='col-3'>
                        <button className='btn btn-dark' style={{ maxWidth: 100, maxHeight: 60, paddingBottom: 30 }}
                            onClick={() => {
                                setstate({ img: './car/products/red-car.jpg' })
                            }
                            }>Red car</button>
                    </div>
                    <div className='col-3'>
                        <button className='btn btn-dark' style={{ maxWidth: 100, maxHeight: 60 }}
                            onClick={() => {
                                setstate({ img: './car/products/steel-car.jpg' })
                            }
                            }>Steel car</button>
                    </div>
                    <div className='col-3'>
                        <button className='btn btn-dark' style={{ maxWidth: 100, maxHeight: 60 }}
                            onClick={() => {
                                setstate({ img: './car/products/silver-car.jpg' })
                            }
                            }>Silver car</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
