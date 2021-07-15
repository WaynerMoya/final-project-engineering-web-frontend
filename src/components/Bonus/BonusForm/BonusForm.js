import React, { useState } from 'react'

import Button from '../../UI/Button'

const DeparmentForm = (props) => {

    const optionsReazonBonus = [
        { option: '1', label: 'increase productivity' },
        { option: '2', label: 'Christmas bonus' },
        { option: '3', label: 'Birthday bonus' }
    ]

    const [deparment, setDepartment] = useState('')
    const [date, setDate] = useState('')
    const [bonus, setBonus] = useState('')
    const [reason, SetReason] = useState('')
    const [user, setUser] = useState('')

    const onHandlerSubmit = (event) => {
        event.preventDefault();

        props.addNewBonus({
            '_idUser' : user,
            'date' : date,
            'bonus' : bonus,
            'reason' : reason
        })

        setDepartment('');
        setDate('');
        setBonus('');
        SetReason('');
        setUser('');
    }

    const selectChooseOption = Object.values(props.users).map((item) => {
        return (
            <option value={item._id} name={item.deparment} id={item.deparment} >{item.firstname}</option>
        )
    })

    const selectChooseOptionReasonBonus = Object.values(optionsReazonBonus).map(item => {
        return (
            <option value={item.label} >{item.label}</option>
        )
    })

    const selectOneOption = (event) => {
        let index = event.target.selectedIndex;
        setUser(event.target.value)
        setDepartment(event.target.options[index].id)
    }

    return (
        <div>
            <form onSubmit={onHandlerSubmit}>
                <div className="row" style={{ marginBottom: 16 }} >
                    <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label">User</label>
                        <select
                            className="form-control"
                            value={user} onChange={selectOneOption}>
                            <option value="" >...</option>
                            {selectChooseOption}
                        </select>
                    </div>

                    <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label">Deparment</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={deparment}
                            onChange={({ target: { value } }) => setDepartment(value)}
                            disabled
                        />
                    </div>
                </div>

                <div className="row" style={{ marginBottom: 16 }}>
                    <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label">Date</label>
                        <input
                            type="date"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            values={date}
                            onChange={({ target: { value } }) => setDate(value)}
                        />
                    </div>
                    <div className="col-6">
                        <label for="exampleInputEmail1" class="form-label">Bonus</label>
                        <input
                            type="number"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={bonus}
                            onChange={({ target: { value } }) => setBonus(value)}
                        />
                    </div>
                </div>
                <div className="row" style={{ marginBottom: 16 }} >
                    <div className="col-12">
                        <label for="exampleInputEmail1" class="form-label">Reason</label>
                        <select
                            className="form-control"
                            value={reason} onChange={({ target: { value } }) => SetReason(value)}>
                            <option value="" >...</option>
                            {selectChooseOptionReasonBonus}
                        </select>
                    </div>
                </div>
                <Button
                    type="submit"
                >
                    Save
                </Button>
            </form>
        </div>
    )
}

export default DeparmentForm;
