import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

class ChannelSelector extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            channelName: [
              'Personal', 
              'Public', 
              'Reading',
              'Learning Languages'
            ],
            value: 'Personal'
        }
    }
    onChange = (option) => {
        const value = option
        this.setState({ value })
    }
    rederChannelName() {
        const channelList = this.state.channelName.map((item, index) => 
                <Option key={index} value={item}>{item}</Option>
        )
        return channelList
    }
    render() { 
        return (
            <Select 
                className='channel-selector' 
                defaultValue={"Channel: " + this.state.channelName[0].toLocaleUpperCase()} 
                onChange={this.onChange}
                value={"Channel: " + this.state.value.toLocaleUpperCase()}   
                >
                {this.rederChannelName()}
            </Select> 
         );
    }
}
 
export default ChannelSelector;