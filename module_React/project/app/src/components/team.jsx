import React from "react";

export default class Team extends React.Component {
    render() {
        return (
            <section id="team" className="team">
                <h2 className="section-title">Meet our teem</h2>
                <div className="team-members container">
                    {this.props.members.map((member, memberIndex) => {
                        return (
                            <div key={memberIndex} className="team-member col-md-3 col-sm-6">
                                <div className="team-member__photo">
                                    <img src={member.imgSrc} alt="Member"/>
                                    <div className="team-member__photo-hidden">
                                        <div className="team-member__photo-target">
                                            <i className="fa fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-member__title">
                                    <div className="team-member__name">{member.name}</div>
                                    <div className="team-member__occupation">{member.occupation}</div>
                                </div>
                                <div className="team-member__social-blocks clearfix">
                                    <a className="team-member__social-block_fb" href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a className="team-member__social-block_tw" href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a className="team-member__social-block_sk" href="#">
                                        <i className="fa fa-skype"></i>
                                    </a>
                                    <a className="team-member__social-block_vi" href="#">
                                        <i className="fa fa-vimeo"></i>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }
}