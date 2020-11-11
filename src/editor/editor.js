import React from 'react';
import ReactQuill from 'react-quill';
import debohance from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

class editorComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        };
    }

    render() {

        const { classes } = this.props;
        console.log(this.state.text);
        return (
            <div className={classes.editorContainer}>
                <ReactQuill value={this.state.text} onChange={this.updateBody}></ReactQuill>
            </div>
        );
    }

    updateBody = async (val) => {
        await this.setState({ text :  val });
        this.update();
    }

    update = debohance (() => {
        console.log('Update database ', '37:57');
    },1500);
}

export default withStyles(styles)(editorComponent);