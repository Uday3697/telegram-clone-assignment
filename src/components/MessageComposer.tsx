import React, { useState, useRef } from "react";
import Picker from "emoji-picker-react";
import { FaPaperclip, FaSmile, FaPaperPlane } from "react-icons/fa";
import './MessageComposer.css';

const MessageComposer: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    const inputRef = useRef<HTMLDivElement>(null);

    const onEmojiClick = (emojiObject: any) => {
        const cursorPos: any = inputRef.current?.onselectstart || message.length;
        const textBeforeCursor = message.slice(0, cursorPos);
        const textAfterCursor = message.slice(cursorPos);
        setMessage(textBeforeCursor + emojiObject.emoji + textAfterCursor);
    };

    const handleInputChange = (event: React.FormEvent<HTMLDivElement>) => {
        setMessage(event.currentTarget.innerText);
    };

    const handleSendMessage = () => {
        console.log("Sending message:", message);
        setMessage(""); // Clear the message input
    };

    return (
        <div className="message-composer">
            <div id="message-input-text">
                <div className="custom-scroll input-scroller">
                    <div className="input-scroller-content">
                        <div
                            id="editable-message-text"
                            className="form-control allow-selection"
                            contentEditable
                            role="textbox"
                            dir="auto"
                            tabIndex={0}
                            aria-label="Message"
                            ref={inputRef}
                            onInput={handleInputChange}
                        >
                            {message}
                        </div>
                        {!message && (
                            <>
                                <div className="icons">
                                    <FaSmile
                                        className="icon"
                                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                                    />
                                </div>
                                <span className="placeholder-text" dir="auto">
                                    Message
                                </span>
                            </>
                        )}
                    </div>
                </div>
                {showEmojiPicker && (
                    <Picker
                        onEmojiClick={onEmojiClick}
                        style={{ position: "absolute", bottom: "60px", right: "20px" }}
                    />
                )}
                <div className="icons">
                    <FaSmile
                        className="icon"
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    />
                    <FaPaperclip className="icon" />
                    <FaPaperPlane className="icon" onClick={handleSendMessage} />
                </div>
            </div>
        </div>
    );
};

export default MessageComposer;
