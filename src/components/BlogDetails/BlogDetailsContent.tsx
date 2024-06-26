"use client";

import React from "react";
import Link from "next/link";
import BlogSideBar from "../../components/Blog/BlogSideBar";
import Image from "next/image";

const BlogDetailsContent: React.FC = () => {
  return (
    <>
      <div className="blog-area blog-ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src="/images/blog-image/blog-details.jpg"
                    alt="image"
                    width={860}
                    height={700}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        <Link href="#">September 31, 2020</Link>
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="/blog">John Anderson</Link>
                      </li>
                    </ul>
                  </div>

                  <h3>How To Boost Your Digital Marketing Agency</h3>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <blockquote className="wp-block-quote">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>

                    <cite>Tom Cruise</cite>
                  </blockquote>

                  <p>
                    Quuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quia non numquam eius modi tempora
                    incidunt ut labore et dolore magnam dolor sit amet,
                    consectetur adipisicing.
                  </p>

                  <ul className="wp-block-gallery columns-3">
                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/images/blog-image/blog-image3.jpg"
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/images/blog-image/blog-image4.jpg"
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </figure>
                    </li>

                    <li className="blocks-gallery-item">
                      <figure>
                        <Image
                          src="/images/blog-image/blog-image3.jpg"
                          alt="image"
                          width={860}
                          height={700}
                        />
                      </figure>
                    </li>
                  </ul>

                  <h3>Four major elements that we offer:</h3>

                  <ul className="features-list">
                    <li>
                      <i className="fas fa-check"></i>
                      Scientific Skills For getting a better result
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      Communication Skills to getting in touch
                    </li>
                    <li>
                      <i className="fas fa-check"></i>A Career Overview
                      opportunity Available
                    </li>
                    <li>
                      <i className="fas fa-check"></i>A good Work Environment
                      For work
                    </li>
                  </ul>

                  <h3>Setting the mood with incense</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in sed quia non
                    numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.
                  </p>

                  <h3>The Rise Of Smarketing And Why You Need It</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud.
                  </p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>
                    <Link href="/blog">Fashion,</Link>
                    <Link href="/blog">Games,</Link>
                    <Link href="/blog">Travel</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <span>Share:</span>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="post-navigation">
                  <div className="navigation-links">
                    <div className="nav-previous">
                      <Link href="#">
                        <i className="flaticon-left-chevron"></i> Prev Post
                      </Link>
                    </div>
                    <div className="nav-next">
                      <Link href="#">
                        Next Post <i className="flaticon-right-chevron"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="comments-area">
                  <h3 className="comments-title">2 Comments:</h3>

                  <ol className="comment-list">
                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <Image
                              src="/images/client-image/client1.jpg"
                              className="avatar"
                              alt="image"
                              width={150}
                              height={150}
                            />
                            <b className="fn">John Jones</b>
                            <span className="says">says:</span>
                          </div>
                          <div className="comment-metadata">
                            April 24, 2023 at 10:59 am
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book.
                          </p>
                        </div>

                        <div className="reply">
                          <Link href="#" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </article>

                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  src="/images/client-image/client2.jpg"
                                  className="avatar"
                                  alt="image"
                                  width={150}
                                  height={150}
                                />
                                <b className="fn">Steven Smith</b>
                                <span className="says">says:</span>
                              </div>

                              <div className="comment-metadata">
                                April 24, 2023 at 10:59 am
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book.
                              </p>
                            </div>

                            <div className="reply">
                              <Link href="#" className="comment-reply-link">
                                Reply
                              </Link>
                            </div>
                          </article>
                        </li>

                        <ol className="children">
                          <li className="comment">
                            <article className="comment-body">
                              <footer className="comment-meta">
                                <div className="comment-author vcard">
                                  <Image
                                    src="/images/client-image/client3.jpg"
                                    className="avatar"
                                    alt="image"
                                    width={150}
                                    height={150}
                                  />
                                  <b className="fn">Sarah Taylor</b>
                                  <span className="says">says:</span>
                                </div>
                                <div className="comment-metadata">
                                  April 24, 2023 at 10:59 am
                                </div>
                              </footer>
                              <div className="comment-content">
                                <p>
                                  Lorem Ipsum has been the industry’s standard
                                  dummy text ever since the 1500s, when an
                                  unknown printer took a galley of type and
                                  scrambled it to make a type specimen book.
                                </p>
                              </div>
                              <div className="reply">
                                <Link href="#" className="comment-reply-link">
                                  Reply
                                </Link>
                              </div>
                            </article>
                          </li>
                        </ol>
                      </ol>
                    </li>

                    <li className="comment">
                      <article className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <Image
                              src="/images/client-image/client2.jpg"
                              className="avatar"
                              alt="image"
                              width={150}
                              height={150}
                            />
                            <b className="fn">John Doe</b>
                            <span className="says">says:</span>
                          </div>
                          <div className="comment-metadata">
                            April 24, 2023 at 10:59 am
                          </div>
                        </footer>

                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book.
                          </p>
                        </div>

                        <div className="reply">
                          <Link href="#" className="comment-reply-link">
                            Reply
                          </Link>
                        </div>
                      </article>

                      <ol className="children">
                        <li className="comment">
                          <article className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <Image
                                  src="/images/client-image/client3.jpg"
                                  className="avatar"
                                  alt="image"
                                  width={150}
                                  height={150}
                                />
                                <b className="fn">James Anderson</b>
                                <span className="says">says:</span>
                              </div>
                              <div className="comment-metadata">
                                April 24, 2023 at 10:59 am
                              </div>
                            </footer>

                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen book.
                              </p>
                            </div>

                            <div className="reply">
                              <Link href="#" className="comment-reply-link">
                                Reply
                              </Link>
                            </div>
                          </article>
                        </li>
                      </ol>
                    </li>
                  </ol>

                  <div className="comment-respond">
                    <h3 className="comment-reply-title">Leave a Reply</h3>

                    <form className="comment-form">
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>
                        Required fields are marked
                        <span className="required">*</span>
                      </p>

                      <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea
                          name="comment"
                          id="comment"
                          rows={5}
                        ></textarea>
                      </p>

                      <p className="comment-form-author">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input type="text" id="author" name="author" />
                      </p>

                      <p className="comment-form-email">
                        <label>
                          Email <span className="required">*</span>
                        </label>
                        <input type="email" id="email" name="email" />
                      </p>

                      <p className="comment-form-url">
                        <label>Website</label>
                        <input type="url" id="url" name="url" />
                      </p>

                      <p className="comment-form-cookies-consent">
                        <input
                          type="checkbox"
                          value="yes"
                          name="wp-comment-cookies-consent"
                          id="wp-comment-cookies-consent"
                        />
                        <label>
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </p>

                      <p className="form-submit">
                        <input
                          type="submit"
                          name="submit"
                          id="submit"
                          className="submit"
                          value="Post Comment"
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
