import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formRef = useRef<any>();
  const [error, setError] = useState<boolean | undefined>();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process?.env?.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID ?? "",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setLoading(false);
          setError(false);
          setSubmitted(true);
          // Reset contact form
          formRef.current.reset();
        },
        (ApiError) => {
          setSubmitted(true);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <section className="contactMe">
      <div className="get-in-touch">
        <h2 className="text-3xl font-semibold pl-4 lg:pl-0">Get In Touch</h2>
      </div>

      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="card  bg-base-100">
          <div className="card-body">
            <div className="flex lg:flex-row flex-col">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  name="user_name"
                />
              </div>

              <div className="divider mx-4" />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  name="user_email"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="input input-bordered"
                name="user_subject"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Message"
                required
                name="message"
              ></textarea>
            </div>

            {submitted ? (
              <>
                {error ? (
                  <>
                    <div className="alert alert-error shadow-lg">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="stroke-current flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>An Error occured. Please try again later.</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="alert alert-success shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>Your message has been sent</span>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <></>
            )}

            {/* Button */}
            <div className="form-control mt-6">
              <button className={`btn  ${loading ? "loading" : "btn-primary"}`}>
                {loading ? "Loading" : "Send Message"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};
