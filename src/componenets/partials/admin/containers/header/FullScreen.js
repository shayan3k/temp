import React, { Fragment } from 'react'

export default function FullScreen() {
    const openFullscreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    }

    return (
        <Fragment>
            <button onClick={openFullscreen} className="header-icon btn btn-empty d-none d-sm-inline-block" type="button" id="fullScreenButton">
                <i className="icon-size-fullscreen d-block"></i>
            </button>
        </Fragment>
    )
}
