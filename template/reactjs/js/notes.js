var Note = React.createClass({
    render: function () {
        var style = {backgroundColor: this.props.color};
        return (<div style={style} className="note">
            <span className="delete-note" onClick={this.props.onDelete}> &times; </span>
                    {this.props.children}
                </div>);
    }
});

var NoteEditor = React.createClass({
    getInitialState: function () {
        return {
            text: '',
            color: 'yellow'
        };
    },

    handleTextChange: function (event) {
        this.setState({
            text: event.target.value
        });
    },

    handleNoteAdd: function () {
        var newNote = {
            text: this.state.text,
            color: this.state.color,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: ''});
        this.removeClass();
    },

    removeClass: function () {
        var arrLi = document.querySelector('.color-picker').childNodes;
        for (var i = 0; i < arrLi.length; i++) {
                arrLi[i].classList.remove('active');
            };
    },

    selectColor: function (event) {
        this.removeClass();
        event.target.classList.toggle('active');
        this.setState({
            color: event.target.style.backgroundColor
        });
    },

    render: function () {
        return (<div className="note-editor">
                <textarea 
                    placeholder="Enter your note here..." 
                    rows={5} 
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
                <ul className="color-picker">
                    <li className="color" style={{backgroundColor: '#ff8a80'}} onClick={this.selectColor}></li>
                    <li className="color" style={{backgroundColor: '#ffd180'}} onClick={this.selectColor}></li>
                    <li className="color" style={{backgroundColor: '#ffff8d'}} onClick={this.selectColor}></li>
                    <li className="color" style={{backgroundColor: '#cfd8dc'}} onClick={this.selectColor}></li>
                    <li className="color" style={{backgroundColor: '#80d8ff'}} onClick={this.selectColor}></li>
                    <li className="color" style={{backgroundColor: '#a7ffeb'}} onClick={this.selectColor}></li>
                    <li className="color" style={{backgroundColor: '#ccff90'}} onClick={this.selectColor}></li>
                </ul>
            </div>);
    }
});

var NotesGrid = React.createClass({
    componentDidMount: function () {
        var grid = this.refs.grid;
        this.msnry = new Masonry( grid, {
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10
        });
    },

    componentDidUpdate: function (prevProps) {
        if(this.props.notes.length !== prevProps.notes.length){
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }, 

    render: function () {
        var onNoteDelete = this.props.onNoteDelete;

        return (<div className="note-grid" ref="grid">
                    {
                        this.props.notes.map(function(note) {
                            return <Note 
                                        key={note.id} 
                                        color={note.color}
                                        onDelete={onNoteDelete.bind(null, note)}
                                    > {note.text} </Note>
                        })
                    }
                </div>);
    }
});

var NotesApp = React.createClass({
    getInitialState: function () {
        return {
            notes: []
        };
    },

    componentDidMount: function () {
        var localNotes = JSON.parse(localStorage.getItem('notes'));
        if(localNotes){
            this.setState({ notes: localNotes });
        }
    },

    componentDidUpdate: function () {
        this._updateLocalStorage();
    },

    handleNoteAdd: function (newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({ notes: newNotes});
    },

    handleNoteDelete: function (note) {
        var noteId = note.id;
        var newNotes = this.state.notes.filter(function (note) {
            return note.id !== noteId;
        });
        this.setState({
            notes: newNotes
        });
    },

    render: function () {
        return (<div className="notes-app">
                <h2 className="app-header">NotesApp</h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>);
    },

    _updateLocalStorage: function () {
        var notes = JSON.stringify(this.state.notes);
        localStorage.setItem("notes", notes);
    }           
});

ReactDOM.render(<NotesApp />, document.getElementById('content'));