import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



const ModalComp = () => {
    const [open, setOpen] = useState(true);

    // const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);



    return (

        <div>
            {/* <button onClick={onOpenModal}>Open modal</button> */}
            <Modal open={open} onClose={onCloseModal} center>
                <div className="card  remove_Border_modal" style={{ 'max-width': '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-5 align-self-center">
                            <img src="./asset/food_images/nonVeg/item_1.jpg" className="img-fluid rounded-start modal_img_size" alt="pic" />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <ul>
                                    <li className='card-text'>Ingredient 1</li>
                                    <li className='card-text'>Ingredient 2</li>
                                    <li className='card-text'>Ingredient 3</li>
                                    <li className='card-text'>Ingredient 4</li>
                                    <li className='card-text'>Ingredient 5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>

    );
};

export default ModalComp