import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



const ModalComp = () => {
    const [open, setOpen] = useState(true);
    const [ingredients] = useState([
        'Ingredient 1',
        'Ingredient 2',
        'Ingredient 3',
        'Ingredient 4',
        'Ingredient 5',
    ])

    // const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
    return (
        
        <div>
            {/* <button onClick={onOpenModal}>Open modal</button> */}
            <Modal open={open} onClose={onCloseModal} center>
                <div className="card  remove_Border_modal" style={{ 'max-width': '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-6 align-self-center">
                            <img src="./asset/food_images/nonVeg/item_1.jpg" className="img-fluid rounded-start modal_img_size" alt="pic" />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body modal_content">
                                <h4 className="card-title title_margin_bottom">Ingredients</h4>
                                {
                                    ingredients.map((item)=>{
                                        // ingred(item)
                                        return(
                                            <div className='row margin_start'>
                                                <div className='col-sm-2'>
                                                    <img src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/000000/external-compounds-and-salt-involved-in-a-soft-gel-capsules-drugs-light-tal-revivo.png"/>
                                                </div>
                                                <div className='col-sm-10'>
                                                    {item}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

export default ModalComp