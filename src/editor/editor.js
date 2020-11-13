import React from 'react';
import ReactQuill from 'react-quill';
import BorderColorIcon from '@material-ui/icons/BorderColor'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import debounce from '../helpers';

class editorComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            text: '',
            title: '',
            id: ''
        };
    }

    componentDidMount = () => {
        this.setState({
            text : this.props.selectedNote.body,
            title : this.props.selectedNote.title,
            id : this.props.selectedNote.id
        });
    }

    componentDidUpdate = () => {
        if(this.props.selectedNote.id !== this.state.id){
            this.setState({
                text : this.props.selectedNote.body,
                title : this.props.selectedNote.title,
                id : this.props.selectedNote.id
            });
        }
    }

    render() {

        const { classes } = this.props;
        console.log(this.state.text);
        return (
            <div className={classes.editorContainer}>
                <BorderColorIcon className={classes.editIcon}/>
                <input className={classes.titleInput} placeholder="Note Title..." value={this.state.title ? this.state.title : ''} onChange={(e) => this.updateTitle(e.target.value)}/>
                <ReactQuill value={this.state.text} onChange={this.updateBody}></ReactQuill>
            </div>
        );
    }

    updateBody = async (val) => {
        await this.setState({ text :  val });
        this.update();
    }

    updateTitle = async (txt) => {
        await this.setState({ title : txt });
        this.update();
    }

    update = debounce (() => {
        this.props.noteUpdate(this.state.id, {
            title : this.state.title,
            body : this.state.text
        })
    },1500);
}

export default withStyles(styles)(editorComponent);

/*

Los dos días más importantes de tu vida son el día en que naces y el día en que descubres por qué.
Mark Twain

*/