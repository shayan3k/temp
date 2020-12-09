import React, { Fragment } from 'react'
import FullScreen from './FullScreen'
import ChangeColor from './ChangeColor'

export default function Icons() {
    return (
        <Fragment>
            <div className="header-icons d-inline-block align-middle">
                <ChangeColor />
                <div className="position-relative d-none d-sm-inline-block">
                    <div className="dropdown-menu-right dropdown">
                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="header-icon btn btn-empty dropdown-toggle">
                            <i className="icon-grid d-block"></i>
                        </button>
                        <div role="menu" id="iconMenuDropdown" className="dropdown-menu dropdown-menu-right">
                            <a aria-current="page" className="dropdown-item active" href="/">
                                <i className="icon-crop"></i>
                                <span>داشبورد</span>
                            </a>
                            <a className="dropdown-item" href="/">
                                <i className="icon-magnet"></i>
                                <span>یو آی</span>
                            </a>
                            <a className="dropdown-item" href="/">
                                <i className="icon-badge"></i>
                                <span>چارت</span>
                            </a>
                            <a className="dropdown-item" href="/">
                                <i className="icon-vector"></i>
                                <span>نظرسنجی</span>
                            </a>
                            <a className="dropdown-item" href="/">
                                <i className="icon-check"></i>
                                <span>تو دو لیست</span>
                            </a>
                        </div>
                    </div>
                </div>
                <FullScreen />
            </div>
        </Fragment>
    )
}
