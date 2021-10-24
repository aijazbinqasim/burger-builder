import React from 'react';
import Modal from '../../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = { error: null }

        UNSAFE_componentWillMount() {
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            this.resInterceptors = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }

        errorClearHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <>
                    <Modal
                        show={this.state.error}
                        orderNowHideHandler={this.errorClearHandler}>
                        {!this.state.error ? null : this.state.error.message}
                    </Modal>

                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }
}

export default withErrorHandler;