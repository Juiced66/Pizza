import React, {useState}from 'react';

const ProductEditor = ({data, onCancel,onUpdate}) => {
    
    const [input, setInput] = useState(data);

    return (
        <div>
            <div>
                <input type="text" name="Product" id="" value={input} onChange={()=>setInput()}/>
            </div>
            <div>
                <button onClick={() => onUpdate()}>Valider</button>
                <button onClick={ () => onCancel()}>Annuler</button>
            </div>

        </div>
    );
}

export default ProductEditor;