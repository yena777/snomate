import React, { Component } from 'react';
import styles from './CreateProject.module.css'

class CreateProject extends Component {
    state = {
        title: "",
        period: "",
        body_text: "",
        body_images: null,
        question: "",
        answer: "",
        url_link: ""
    }
    render() {
        return (
            <div className={styles.text_align}>
                <h2 className={styles.middle_title}>글쓰기</h2>
                <form className={styles.input_form}>
                    <div>
                        <label>제목</label><br/>
                        <input type="text" name="title" placeholder="제목" value={this.state.title} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>모집기한</label><br/>
                        <input type="date" name="period" value={this.state.period} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>내용</label><br/>
                        <input type="text" placeholder="내용" name="body_text" value={this.state.body_text} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>대표 이미지</label><br/>
                        <input type="file" name="body_images" value={this.state.body_images} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>질문</label><br/>
                        <input type="text" placeholder="질문" name="question" value={this.question} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>답변</label><br/>
                        <input type="text" placeholder="답변" name="answer" value={this.state.answer} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>링크</label><br/>
                        <input type="url" name="url_link" value={this.state.url_link} onChange={this.handleValueChange}/>
                    </div>
                    <br/>
                </form>
            
            </div>
        );
    }
}

export default CreateProject;