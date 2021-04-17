import DefaultLayout from '../layouts/Default';
import page404svg from '../images/page-404-error.svg';

const Notfound404 = () => {
    return (
        <DefaultLayout>
            <h2 style={{ textAlign: 'center', marginTop: '1em' }}>Page not found! Error 404</h2>
            <img style={{
                display: 'inline-flex',
                width: '100%',
                maxWidth: '640px',
                margin: '2em auto'
            }} src={page404svg} alt="Error 404!" />
        </DefaultLayout>
    )
}

export default Notfound404;