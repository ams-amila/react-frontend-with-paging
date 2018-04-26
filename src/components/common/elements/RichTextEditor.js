import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TinyMCE from 'react-tinymce';
import {renderError} from './utils';

const MCE_PLUGINS = "code autoresize print preview visualblocks visualchars fullscreen image" +
    " link media template table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist" +
    " lists textcolor wordcount   imagetools   contextmenu colorpicker textpattern help";
const MCE_TOOLBAR = "insertfile formatselect | bold italic strikethrough forecolor backcolor " +
    "| link image table | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent " +
    "| removeformat";
const FILE_UPLOAD_ENDPOINT = "http://stylistdiary.com/blogger/storage"

class RichTextEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {editor: null};
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }

    handleEditorChange(e) {
        this.props.input.onChange(e.target.getContent());
    }

    render() {
        let {input, label, meta: {asyncValidating, touched, error}} = this.props;
        return (
            <div className="form-group col-md-12">
                {label && <label>{label}</label>}
                <div>
                    <TinyMCE
                        content={`${input.value}`}
                        config={{
                            menubar: false,
                            statusbar: false,
                            theme: "modern",
                            file_picker_types: "image",
                            convert_urls: false,
                            images_upload_url: FILE_UPLOAD_ENDPOINT,
                            plugins: MCE_PLUGINS,
                            toolbar1: MCE_TOOLBAR,
                        }}
                        onChange={this.handleEditorChange}
                    />
                    <input type="text" {...input} className={`form-control ${touched && error ? 'is-invalid' : ''}`}
                           style={{visibility: 'hidden', position: 'absolute', left: '-9999px'}}/>
                    {renderError(touched, error, asyncValidating)}
                </div>
            </div>
        );
    }
}

RichTextEditor.propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired
};

export default RichTextEditor;
