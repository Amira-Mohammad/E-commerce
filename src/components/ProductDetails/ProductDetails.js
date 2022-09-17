import iphoe13 from "../../images/Iphone.png";
import CIB from "../../images/CIB.png";
import shipping from "../../images/shipping.png";
import returned from "../../images/returned.png";
import "./ProductDetails.css";
function ProductDetails() {
  return (
    <div className="ProductDetailsWrapper container">
      <div className="row">
        <div className="col-lg-3 my-4 d-flex flex-column align-items-end">
          <img
            src="http://preview.bit68.com/bit68Task/slider.png"
            width={50}
            height={50}
            className="my-2"
          />

          <img
            src="http://preview.bit68.com/bit68Task/slider.png"
            width={50}
            height={50}
            className="my-2"
          />

          <img
            src="http://preview.bit68.com/bit68Task/slider.png"
            width={50}
            height={50}
            className="my-2"
          />

          <img
            src="http://preview.bit68.com/bit68Task/slider.png"
            width={50}
            height={50}
            className="my-2"
          />

          <img
            src="http://preview.bit68.com/bit68Task/slider.png"
            width={50}
            height={50}
            className="my-2"
          />
        </div>

        <div className="col-lg-3 col-sm-3 my-5">
          <img className="iphoe13" src={iphoe13} width={200} height={200} />
        </div>

        <div className="col-lg-6 p-5">
          <div className="text-start my-2">APPLE</div>
          <div className="text-start my-2 fw-bold">
            Apple - iPhone 13 Pro 5G 128GB - Sierra Blue (Verizon)
          </div>
          <div className="text-start my-2">Rating</div>
          <div className="priceValue text-start my-2 fw-bold text-primary">
            $2,500
          </div>
          <div className="status text-start my-2">In stock</div>
          <div className="count text-start">
            <button className="btn border border-dark mx-2">+</button>
            <span className="mx-2">1</span>
            <button className="btn border border-dark mx-2">-</button>
          </div>
          <div className="d-flex my-2 ">
            <div className="border rounded mx-2 memory p-1 d-flex justify-content-center align-items-center">
              Full Price
            </div>
            <div className="border rounded mx-2 memory p-1 d-flex justify-content-center align-items-center">
              Installments
            </div>
          </div>

          <div className="d-flex">
            <div className="border rounded mx-2">
              <img src={CIB} width={80} height={50} className="my-2" />
            </div>
            <div className="border rounded mx-2">
              <img src={CIB} width={80} height={50} className="my-2" />
            </div>
            <div className="border rounded mx-2">
              <img src={CIB} width={80} height={50} className="my-2" />
            </div>
            <div className="border rounded mx-2">
              <img src={CIB} width={80} height={50} className="my-2" />
            </div>
          </div>
          <div className="text-start">Memory</div>
          <div className="d-flex my-1 ">
            <div className="border rounded mx-2 memory p-1">
              <div className="fw-bold">128GB</div>
              <div>$999.00</div>
            </div>
            <div className="border rounded mx-2 memory p-1">
              <div className="fw-bold">256GB</div>
              <div>$999.00</div>
            </div>
            <div className="border rounded mx-2 memory p-1">
              <div className="fw-bold">512GB</div>
              <div>$999.00</div>
            </div>
            <div className="border rounded mx-2 memory p-1">
              <div className="fw-bold">1TB</div>
              <div>$999.00</div>
            </div>
          </div>

          <div className="text-start">Color</div>

          <div className="d-flex my-1 ">
            <div className="border rounded mx-2 memory p-1 d-flex flex-column justify-content-center align-items-center">
              <div className="colorValue">Silver</div>
              <div className="colorCircle border"></div>
            </div>
            <div className="border rounded mx-2 memory p-1 d-flex flex-column justify-content-center align-items-center">
              <div className="colorValue">Sierra Blue</div>
              <div className="colorCircle border bg-info"></div>
            </div>
          </div>

          <div className="text-start">Insurance</div>

          <div className="d-flex my-1 ">
            <div className="border rounded mx-2 memory p-1">
              <div className="fw-bold">1 year</div>
              <div>$99.00</div>
            </div>
            <div className="border rounded mx-2 memory p-1">
              <div className="fw-bold">2 year</div>
              <div>$159.00</div>
            </div>
          </div>

          <button type="button" class="btn btn-primary w-100">
            Add To Cart
          </button>
          <div className="text-start d-flex">
            <img src={shipping} width={10} height={10} className="my-2" />
            <div className="mx-2">Free shipping, arrives by Tue, Nov 23</div>
          </div>
          <div className="text-start d-flex">
            <img src={returned} width={10} height={10} className="my-2" />
            <div className="mx-2">
              Free 10-day return window starts Dec 26th Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
