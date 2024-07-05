import { useState } from 'react';
import './ClickerPage.scss'
import React from 'react';

export function ClickerPage() {
    const [counter, setCounter] = useState(0)
    
    function clickOnMeHandler() {
      setCounter(counter + 1)
    }

    return (
      <div className="clicker-body">
        <label data-cy="clicker-counter-window" className="clicker-counter-window">{counter}</label>
        <button data-cy="clicker-button" className="clicker-button" onClick={() => clickOnMeHandler()}>Click on me!</button>
      </div>
    )
  }