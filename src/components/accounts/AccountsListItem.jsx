import React from 'react'
import * as Icon from 'react-bootstrap-icons'

export default function AccountItem(props) {
    return (
        <div className="account-card position-relative row align-items-center justify-content-between bg-white py-3 px-sm-3 px-0 shadow-sm rounded my-3">
            <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                    <Icon.ThreeDots />
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li>
                        <a className="dropdown-item edit py-1 px-3" href="#">
                            Edit
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item delete py-1 px-3" href="#">
                            Delete
                        </a>
                    </li>
                </ul>
            </div>
            <div className="d-flex align-items-center col-md-4 col-sm-8 col-12">
                {props.type === "Cash Account" && <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', minWidth: '50px', height: '50px', background: props.color }}>
                    <Icon.Wallet color="white" size={24} />
                </div> }
                {props.type === "Current Account" && <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', minWidth: '50px', height: '50px', background: props.color  }}>
                    <Icon.Bank color="white" size={24} />
                </div> }
                <div className="mx-2">
                    <h6 className="mb-0 fw-bold">{props.name}</h6>
                    <p className='mb-0 d-md-none d-block'>{props.type}</p>
                </div>
            </div>

            <div className="col-4 text-center d-md-block d-none" >
                <h6 className="mb-0">{props.type}</h6>
            </div>
            <div className="col-4 d-sm-block d-none text-end">
                <h6 className="mb-0 fw-bold">PKR&nbsp;{props.balance}</h6>
            </div>
            <div className="col-12 text-start mt-md-0 mt-2 ms-5 ps-4 d-sm-none d-block">
                <h6 className="mb-0 fw-bold">PKR&nbsp;{props.balance}</h6>
            </div>
        </div>
    )
}
