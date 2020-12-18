// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  };

  handleChangeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  handleChangeRes = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    }) // or it can be assigned by this way either leaves empty attributes intact
    // this.setState({
    //   settings: Object.assign({}, this.state.settings, {
    //     video: Object.assign({}, this.state.settings.video, {
    //       resolution: '720p'
    //     })
    //   })
    // });
  }

  render() {
    return (<div>
      <button className="bitrate" onClick={this.handleChangeBitrate}>Change Bitrate!</button>
      <button className="resolution" onClick={this.handleChangeRes}>Change Resolution!</button>
    </div>
    )
  }
}