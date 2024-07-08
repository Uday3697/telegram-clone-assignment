import React, { useState, useRef } from "react";
import Picker from "emoji-picker-react";
import { FaPaperclip, FaSmile, FaPaperPlane } from "react-icons/fa";

const MessageComposer: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    const inputRef = useRef<HTMLDivElement>(null);

    const onEmojiClick = (event: any, emojiObject: any) => {
        const cursorPos: any = inputRef.current?.onselectstart || message.length;
        const textBeforeCursor = message.slice(0, cursorPos);
        const textAfterCursor = message.slice(cursorPos);
        setMessage(textBeforeCursor + emojiObject.emoji + textAfterCursor);
    };

    const handleInputChange = (event: React.FormEvent<HTMLDivElement>) => {
        setMessage(event.currentTarget.innerText);
    };

    const handleSendMessage = () => {
        // Handle sending message
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
                            style={{ transition: "color 50ms linear 0s !important" }}
                            ref={inputRef}
                            onInput={handleInputChange}
                        >
                            {message}
                        </div>
                        {!message && (
                            <span className="placeholder-text" dir="auto">
                                Message
                            </span>
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
            <style>{`
        .message-composer {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 10px;
        }

        .form-control {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 10px;
          min-height: 40px;
        }

        .icons {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
        }

        .icon {
          font-size: 1.5rem;
          margin-left: 10px;
          cursor: pointer;
        }

        .placeholder-text {
          position: absolute;
          top: 50%;
          left: 15px;
          transform: translateY(-50%);
          color: #999;
        }
      `}</style>
        </div>
    );
};

export default MessageComposer;
