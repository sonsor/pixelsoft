/**
 * @description modify request header with authorization token/ client-id
 * @param {*} request {HttpRequest}
 * @return {null}
 */

const tokenInterceptor = (request) => {
  return request;
};

/**
 * @description get response
 * @param {*} response {HttpResponse}
 * @return {null}
 */
const successInterceptor = (response) =>
  console.log(`Success Interceptor:: ${response}`);

/**
 * @description get error
 * @param {*} response {HttpResponse}
 * @return {null}
 */
const errorInterceptor = (error) => console.error(error);

export { tokenInterceptor, successInterceptor, errorInterceptor };
