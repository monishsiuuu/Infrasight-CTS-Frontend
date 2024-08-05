import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/box.css';

const Box = (props) => {
    const navigate = useNavigate();

    return (
        <div className='list_box' onClick={() => { navigate(`/server/detail/${props.id}`) }}>
            <div className='box_heading'><p className='box_heading'>{props.name}</p></div>
            <div className='box_divider'>
                <hr style={{ background: 'grey' }} />
            </div>
            <div className='box_stats'>
                <div className='stats_cpu'>
                    <div className="stats_box">
                        <div className='stats_box_heading'>Maximum CPU</div>
                        <div className='stats_box_text'><h4>{props.cpu}%</h4></div>
                    </div>
                </div>
                <div className='stats_disk'>
                    <div className="stats_box">
                        <div className='stats_box_heading'>Maximum DISK</div>
                        <div className='stats_box_text'><h4>{props.disk}%</h4></div>
                    </div>
                </div>
                <div className='stats_ram'>
                    <div className="stats_box">
                        <div className='stats_box_heading'>Maximum RAM</div>
                        <div className='stats_box_text'><h4>{props.ram}%</h4></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box