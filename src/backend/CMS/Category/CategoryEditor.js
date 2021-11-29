/**
 * handleUpdate()
 * handleCancelUpdate()
 */

import React, {useState}from 'react';

const CategoryEditor = ({data, onCancel,onUpdate}) => {
    
    const [input, setInput] = useState(data);

    return (
        <div>
            <input type="text" name="category" id="" value={input} onChange={()=>setInput()}/>
            <div>
                <button onClick={() => onUpdate()}>Valider</button>
                <button onClick={ () => onCancel()}>Annuler</button>
            </div>
        </div>
    );
}

export default CategoryEditor;
