import Link from 'next/link';
import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: '',
    errorInfo: '',
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    console.log('Label 🏷️ Error Fronted: ', error);
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log(errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="container mt-5 pt-5" style={{ marginTop: '120px' }}>
          <div
            className="row page_404 justify-content-center align-items-center"
            style={{ marginTop: '10rem', marginBottom: '10rem' }}
          >
            <div className="col-md-12">
              <p className="text-center text-md-left">
                Lo sentimos hemos presentado un error. Haz Click abajo para ir
                al home
              </p>
              <Link href={`/`}>
                <a className="juegalo_btn_primary_404 mt-4 px-5 ">Ir al home</a>
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
