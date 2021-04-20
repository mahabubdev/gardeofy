import { useState, useCallback, useEffect } from "react";
import { DashboardPageWrapper, OrderPageHeader, OrderOfUser, OrdersUserContainer, OrderPageShowcase, CheckoutArea, ServiceCard } from "./styled";
import { API_SERVER } from '../../config';
import swal from 'sweetalert';
import { GiThreeLeaves } from 'react-icons/gi';
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AdminOrderPage from '../../components/AdminOrders';
import { AdminRoleRoutes } from '../../routes/private/Admin.routes';
import { useAuthHook } from "../../context/auth";
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { bgColors, textColors } from '../../components/GlobalStyledVars';



const CardField = ({ onChange }) => (
    <div className="FormRow">
        <CardElement onChange={onChange} options={CARD_OPTIONS} />
    </div>
);



const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: bgColors.themeRGBA(.85),
        color: textColors.theme,
        fontWeight: 500,
        fontSize: '1em',
        ":-webkit-autofill": {
          color: textColors.theme,
        },
        "::placeholder": {
          color: bgColors.themeRGBA(.5),
        }
      },
      invalid: {
        iconColor: 'red',
        color: 'rgba(255, 0, 0, 0.5)'
      }
    }
};

const Field = ({
    label,
    id,
    type,
    placeholder,
    required,
    autoComplete,
    value,
    onChange
  }) => (
    <div className="FormRow">
      <label htmlFor={id} className="FormRowLabel">
        {label}
      </label>
      <input
        className="FormRowInput"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );

  const SubmitButton = ({ processing, error, children, disabled }) => (
    <button
      className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
      type="submit"
      disabled={processing || disabled}
    >
      {processing ? "Processing..." : children}
    </button>
  );


  const ErrorMessage = ({ children }) => (
    <div className="ErrorMessage" role="alert">
      <svg width="16" height="16" viewBox="0 0 17 17">
        <path
          fill="#FFF"
          d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
        />
        <path
          fill="#6772e5"
          d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
        />
      </svg>
      {children}
    </div>
  );


//   const ResetButton = ({ onClick }) => (
//     <button type="button" className="ResetButton" onClick={onClick}>
//       <svg width="32px" height="32px" viewBox="0 0 32 32">
//         <path
//           fill="#FFF"
//           d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
//         />
//       </svg>
//     </button>
//   );



  const CheckoutForm = ({ user, service }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [billingDetails, setBillingDetails] = useState({
      email: user.email,
      phone: "",
      name: user.name
    });
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      if (error) {
        elements.getElement("card").focus();
        return;
      }
  
      if (cardComplete) {
        setProcessing(true);
      }
  
      const payload = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: billingDetails
      });
  
      setProcessing(false);




      // after successful payment
      const afterPayment = async (service, payment) => {
          const getToken = localStorage.getItem('token') ?
          localStorage.getItem('token') : 'NULL'
          const headers = {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${getToken}`
          }
          await fetch(API_SERVER + '/api/order/add', {
              method: 'POST',
              body: JSON.stringify({
                  serviceId: service._id,
                  paymentInfo: payment
              }),
              headers: headers,
          })
          .then(res => res.json())
          .then(res => {
              //
              if (res.errCode) {
                  // errors
                  console.log(res.errors);
                  swal({
                    title: res.message,
                    text: res.errCode,
                    icon: 'error',
                })
              } else {
                  // ok
                  swal({
                    title: 'Payment successful',
                    text: '',
                    icon: 'success',
                })
              }
                
          }).catch(err => {
              //
              console.log(err);
              swal({
                title: err.message,
                text: err.errCode,
                icon: 'error',
            })
          })
      }



  
      if (payload.error) {
        setError(payload.error);
      } else {
        setPaymentMethod(payload.paymentMethod);
        afterPayment(service, payload.paymentMethod)
        reset();
      }
    };
  
    const reset = () => {
      setError(null);
      setProcessing(false);
      setPaymentMethod(null);
      setBillingDetails({
        email: user.email,
        phone: "",
        name: user.name
      });
    };
  
    return paymentMethod ? (
    //   <div className="Result">
    //     <div className="ResultTitle" role="alert">
    //       Payment successful
    //     </div>
    //     <div className="ResultMessage">
    //       Thanks for trying Stripe Elements. No money was charged, but we
    //       generated a PaymentMethod: {paymentMethod.id}
    //     </div>
    //     <ResetButton onClick={reset} />
    //   </div>
        null
    ) : (
      <form className="Form" onSubmit={handleSubmit}>
          <div className="service_info">
              <div>
                  <p>Price: {service.info.price + ' ' + service.info.currency} / {service.info.validity}</p>
                  <p>Service Name: {service.name}</p>
                  <p>Service ID: {service.uid}</p>
              </div>
          </div>

          <h3>Pay Now</h3>

        <fieldset className="FormGroup">
          <Field
            label="Name"
            id="name"
            type="text"
            placeholder="Your Name"
            required
            autoComplete="name"
            value={billingDetails.name}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, name: e.target.value });
            }}
          />
          <Field
            label="Email"
            id="email"
            type="email"
            placeholder="Your Email Address"
            required
            autoComplete="email"
            value={billingDetails.email}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, email: e.target.value });
            }}
          />
          <Field
            label="Phone"
            id="phone"
            type="tel"
            placeholder="Your Phone Number"
            required
            autoComplete="tel"
            value={billingDetails.phone}
            onChange={(e) => {
              setBillingDetails({ ...billingDetails, phone: e.target.value });
            }}
          />
        </fieldset>
        <fieldset className="card_input">
          <CardField
            onChange={(e) => {
              setError(e.error);
              setCardComplete(e.complete);
            }}
          />
        </fieldset>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        <SubmitButton processing={processing} error={error} disabled={!stripe}>
          {`Pay ${service.info.price + ' ' + service.info.currency} & complete the order now`}
        </SubmitButton>
      </form>
    );
  };


//   const ELEMENTS_OPTIONS = {
//     fonts: [
//       {
//         cssSrc: "https://fonts.googleapis.com/css?family=Roboto"
//       }
//     ]
//   };




// Checkout page
const CheckoutPage = ({ location: { state: { service } } }) => {
    // console.log("fromCheckout=>", service);
    const { user } = useAuthHook();


    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

    return (
        <DashboardPageWrapper style={{marginTop: '1em'}}>
            <CheckoutArea>
                <Elements stripe={stripePromise}>
                    <CheckoutForm user={user} service={service}  />
                </Elements>
            </CheckoutArea>
        </DashboardPageWrapper>
    )
}











// buy page
const BuyService = ({ match }) => {
    // console.log('fromBuy=>', match)
    const [services, setServices] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        async function fetchAvailableServices() {
            // fetch
            const getToken = localStorage.getItem('token') ?
                            localStorage.getItem('token') : 'NULL'
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
            await fetch(API_SERVER + '/api/service?status=1', { headers: headers })
            .then(res => res.json())
            .then(res => {
                if (res.errCode) {
                    // error
                    console.log(res);
                    swal({
                        title: res.message,
                        text: res.errCode,
                        icon: 'error'
                    })
                    setLoaded(true)
                }
                else {
                    // ok
                    setServices(res);
                    setLoaded(true);
                }
            })
        }

        if (! loaded) {
            fetchAvailableServices();
        }
    }, [loaded]);



    return (<Router>
        <Switch>
            <Route exact path={`${match.url}`} render={() => (
                <OrderPageShowcase>
                <h2>Available Services</h2>

                <div className="services_container">
                    {
                        loaded ? (
                            services.length > 0 ? (
                                services.map(srv => (
                                    <ServiceCard key={srv.uid}>
                                        <span><GiThreeLeaves /></span>
                                        <div className="service_info">
                                            <h4>{srv.name}</h4>
                                            <p style={{color: 'lightsalmon'}}>{srv.info.price + ' ' + srv.info.currency + ' for ' + srv.info.validity}</p>
                                            <p>{srv.description}</p>
                                        </div>
                                        <Link 
                                            to={{
                                                pathname: `${match.url}/checkout`,
                                                state: {
                                                    service: srv,
                                                }
                                            }} 
                                            className="btn">
                                            get now
                                        </Link>
                                    </ServiceCard>
                                ))
                            ) : (
                                <p>No service is available right now</p>
                            )
                        ) : (null)
                    }
                </div>
            </OrderPageShowcase>
            )} />


            <Route path={`${match.url}/checkout`} component={CheckoutPage} />
        </Switch>


        
    </Router>)
}














const OrderPageIndex = ({  }) => {


  const [orders, setOrders] = useState();
  const [loaded, setLoaded] = useState(false);

  const { user } = useAuthHook();

  useEffect( () => {

    async function getOrdersForAdmins() {
        const getToken = localStorage.getItem('token') ?
                          localStorage.getItem('token') : 'NULL'
          const headers = {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${getToken}`
          }
          await fetch(API_SERVER + '/api/order/', { headers: headers })
          .then(res => res.json())
          .then(res => {
              if (res.errCode) {
                  // error
                  console.log(res);
                  swal({
                      title: res.message,
                      text: res.errCode,
                      icon: 'error'
                  })
                  setLoaded(true)
              }
              else {
                  // ok
                  setOrders(res);
                  setLoaded(true)
              }
          })
    }



    // different for custom & admins
    async function getOrderOfUser() {
      const getToken = localStorage.getItem('token') ?
                          localStorage.getItem('token') : 'NULL'
          const headers = {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${getToken}`
          }
          await fetch(API_SERVER + '/api/order/user', { headers: headers })
          .then(res => res.json())
          .then(res => {
              if (res.errCode) {
                  // error
                  console.log(res);
                  swal({
                      title: res.message,
                      text: res.errCode,
                      icon: 'error'
                  })
                  setLoaded(true)
              }
              else {
                  // ok
                  setOrders(res);
                  setLoaded(true)
              }
          })
    }


      if (! loaded) {
          // fetch
          if (user.role === 'customer') {
            getOrderOfUser();
          } else {
            // for admins
            getOrdersForAdmins();
          }
          
      }
  }, [loaded]);









  return (
    <>
                                <DashboardPageWrapper style={{marginTop: '1em'}}>
                                    <OrderPageHeader>
                                    {
                                        loaded && orders ? (
                                            user.role === 'customer' ? (
                                              <>
                                                <h2 style={{color: 'green'}}>You have {orders.length} orders</h2>
                                              </>
                                            ) : (
                                              <div style={{
                                                display: 'flex',
                                                flexDirection: 'column'
                                              }}>
                                                <h2 style={{color: 'green'}}>Gardeofy have {orders.length} orders in total</h2>
                                                <small>Pleas click on "Manage" button for managing all orders in a table</small>
                                              </div>
                                            )
                                        ) :
                                        (<h2>You have no orders yet!</h2>)
                                    }
                                    </OrderPageHeader>

                                    <OrdersUserContainer>
                                        {
                                            loaded && user.role === 'customer' && orders.length > 0 ?
                                            (
                                                orders.map(od => (
                                                    <OrderOfUser key={od.uid}>
                                                        <div className="card_top">
                                                            <p># OrderId: {od.uid}</p>
                                                            <p>
                                                                {od.status === 'pending' ? (
                                                                    <span className="_pen">{od.status}</span>
                                                                ) : (
                                                                    od.status === 'on_going' ? (
                                                                        <span className="_ogn">{od.status}</span>
                                                                    ) : (
                                                                        <span className="_dn">{od.status}</span>
                                                                    )
                                                                )}
                                                            </p>
                                                        </div>

                                                        <div className="card_bdy">
                                                            <p>~ Order Placed: {new Date(od.createdAt).toLocaleString()}</p>
                                                            <p>~ Payment Id: {od.info.id}</p>
                                                            <p>~ Service: {od.service.name}</p>
                                                            <p>~ Price: {od.service.info.price}</p>
                                                            <p>~ Currency: {od.service.info.currency}</p>
                                                            <p>~ Validity: {od.service.info.validity}</p>
                                                        </div>
                                                    </OrderOfUser>
                                                ))
                                            ) : (
                                                null
                                            )
                                        }
                                    </OrdersUserContainer>
                                </DashboardPageWrapper>
                            </>
  )
}















const OrderPage = ({ match }) => {
    // state
    // const [orders, setOrders] = useState();
    // const [loaded, setLoaded] = useState(false);

    const { user } = useAuthHook();

    // useEffect( () => {

    //   async function getOrdersForAdmins() {
    //       const getToken = localStorage.getItem('token') ?
    //                         localStorage.getItem('token') : 'NULL'
    //         const headers = {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': `Bearer ${getToken}`
    //         }
    //         await fetch(API_SERVER + '/api/order/', { headers: headers })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.errCode) {
    //                 // error
    //                 console.log(res);
    //                 swal({
    //                     title: res.message,
    //                     text: res.errCode,
    //                     icon: 'error'
    //                 })
    //                 setLoaded(true)
    //             }
    //             else {
    //                 // ok
    //                 setOrders(res);
    //                 setLoaded(true)
    //             }
    //         })
    //   }



    //   // different for custom & admins
    //   async function getOrderOfUser() {
    //     const getToken = localStorage.getItem('token') ?
    //                         localStorage.getItem('token') : 'NULL'
    //         const headers = {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': `Bearer ${getToken}`
    //         }
    //         await fetch(API_SERVER + '/api/order/user', { headers: headers })
    //         .then(res => res.json())
    //         .then(res => {
    //             if (res.errCode) {
    //                 // error
    //                 console.log(res);
    //                 swal({
    //                     title: res.message,
    //                     text: res.errCode,
    //                     icon: 'error'
    //                 })
    //                 setLoaded(true)
    //             }
    //             else {
    //                 // ok
    //                 setOrders(res);
    //                 setLoaded(true)
    //             }
    //         })
    //   }


    //     if (! loaded) {
    //         // fetch
    //         if (user.role === 'customer') {
    //           getOrderOfUser();
    //         } else {
    //           // for admins
    //           getOrdersForAdmins();
    //         }
            
    //     }
    // }, [loaded]);

    return (
        <>
                <nav style={{ display: 'flex', gap: '1em' }}>
                    {
                        user.role === 'customer' ?
                        (
                            <>
                                <Link to={`${match.url}`}>
                                    <Button variant="contained" color="default">
                                        Orders
                                    </Button>
                                </Link>
                                <Link to={`${match.url}/buy`}>
                                    <Button variant="contained" color="primary">
                                        Buy
                                    </Button>
                                </Link>
                            </>
                        ) : (
                            <Link to={`${match.url}/manage`}>
                                <Button variant="contained" color="primary">
                                    Manage
                                </Button>
                            </Link>
                        )
                    }
                </nav>
                
                <Switch>
                    <Route
                        path={`${match.url}`}
                        exact
                        component={OrderPageIndex}
                    />

                    <Route path={`${match.url}/buy`} component={BuyService} />

                    <AdminRoleRoutes path={`${match.url}/manage`} component={AdminOrderPage} />

                    <Route path={`${match.url}/*`} render={() => (
                        <>
                            <h1>Page not found</h1>
                        </>
                    )} />
                </Switch>
          

            
        </>
    )
}

export default OrderPage;