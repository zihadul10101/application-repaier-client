import React from 'react';

const ReviewDetail = (props) => {
    const { quote, name, from, img } = props.testimonial;
    return (
        <div className="col-md-4 pt-5 pb-5">
            <div className=" justify-content-center ">
            <div className="card d-flex pt-5 pb-20">
                <img className="card-img-top mx-3" src={img} width="40" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{from} .</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{quote} </small>
                    </div>   
            </div>
        </div>
        </div>


        // <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        //     <div class="carousel-inner">
        //         <div class="carousel-item active mx-3 " data-bs-interval="10000">
        //             <img src={img} width="60" class="d-block w-25" alt="..." />
        //         </div>

        //     </div>
        //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Previous</span>
        //     </button>
        //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Next</span>
        //     </button>
        // </div>
    );
};

export default ReviewDetail;