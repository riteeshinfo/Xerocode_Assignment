import { FunctionComponent, useEffect } from "react";

const Home: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <a
      className="[text-decoration:none] relative bg-bgwhite w-full h-[11661px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-center text-25xl text-text-purple-haze font-heading-h3-44px-semibold"
      data-animate-on-scroll
    >
      <div className="absolute top-[1666.02px] left-[calc(50%_-_415px)] leading-[125%] font-semibold text-left flex items-center w-[830px] h-[45px] text-royalblue">
        <span className="[line-break:anywhere] w-full">
          <span>Save 1000s</span>
          <span className="text-gray-200"> of expensive coder hours</span>
        </span>
      </div>
      <div className="absolute top-[1731.02px] left-[calc(50%_-_557px)] text-xl leading-[180%] font-body-b1-20px-regular inline-block w-[1114px]">
        With cloud native technologies, we assist in modernising infrastructure
        and applications for resilience and scalability.
      </div>
      <div className="absolute top-[101px] left-[-3px] w-[1734px] overflow-hidden flex flex-col items-start justify-center text-5xl text-gray-100 font-body-b1-20px-regular">
        <div className="relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1728px] h-[1020.66px]">
          <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[1728px] h-[1017px]" />
          <div className="absolute top-[235px] left-[322px] w-[1114px] overflow-hidden flex flex-col items-center justify-end">
            <div className="self-stretch relative leading-[180%]">
              no more, no less. Deploy from our single pane of glass, manage
              them with ease and scale up as fast as your workload grows.
            </div>
          </div>
          <div className="absolute top-[0px] left-[307px] w-[1114px] h-[204px] overflow-hidden flex flex-col items-center justify-end text-[56px] text-gray-200 font-heading-h3-44px-semibold">
            <b className="relative leading-[125%] flex items-center justify-center w-[1114px] h-[124px] shrink-0">
              Build your audience and grow your brand
            </b>
          </div>
          <div className="absolute top-[0px] left-[739px] w-[251px] h-[417.15px] overflow-hidden flex flex-col items-center justify-end py-[0.000011444091796875px] px-0 box-border text-xl text-background-white font-nunito">
            <div className="rounded-8xs bg-royalblue box-border w-[251px] flex flex-col items-center justify-end border-[2px] border-solid border-royalblue">
              <b className="relative leading-[150%] capitalize flex items-center justify-center w-[251px] h-[51.15px] shrink-0">
                Get Started Now
              </b>
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[125.48px] w-[1464.23px] h-[1020.66px] overflow-hidden"
            alt=""
            src="/frame.svg"
          />
        </div>
      </div>
      <div className="absolute top-[1514.01px] left-[781px] w-[166px] overflow-hidden flex flex-col items-center justify-center text-left text-lg text-royalblue font-nunito">
        <div className="rounded-[39px] bg-dodgerblue-200 flex flex-row items-center justify-center py-[25px] px-[46px]">
          <b className="relative">Features</b>
        </div>
      </div>
      <div className="absolute top-[4051px] left-[calc(50%_-_699px)] rounded-16xl bg-royalblue w-[1398px] h-[1475px] text-left text-background-white">
        <div className="absolute top-[110px] left-[calc(50%_-_556px)] leading-[140%] capitalize font-semibold text-center flex items-center justify-center w-[1113px] h-[90px]">
          Modernize apps, infrastructure with cloud native tech for resilience,
          scalability.
        </div>
        <div className="absolute top-[384px] left-[142px] w-[1114px] h-[357px] flex flex-row items-center justify-start gap-[46px]">
          <img
            className="relative w-[932.97px] h-[530.98px]"
            alt=""
            src="/cards-screen.svg"
          />
          <div className="w-[375px] h-[356.68px] flex flex-col items-start justify-end py-0 pr-[0.0003662109375px] pl-0 box-border gap-[60px]">
            <div className="relative leading-[140%] capitalize font-semibold inline-block w-[374.68px] h-[92.04px] shrink-0">
              Real-time risk monitoring
            </div>
            <div className="relative text-xl leading-[180%] font-body-b1-20px-regular inline-block w-[375px] h-[204px] shrink-0">
              Real-time risk monitoring across your infrastructure and
              application ecosystem will help you maintain ongoing compliance
              with more than 05+ different regulatory standards.
            </div>
          </div>
        </div>
        <div className="absolute top-[849px] left-[142px] w-[1114px] h-[518.1px] flex flex-row items-start justify-start gap-[64px]">
          <div className="w-[483.97px] h-[358.01px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
            <div className="w-[483.97px] h-[245px] flex flex-col items-start justify-start gap-[13px]">
              <div className="relative leading-[140%] capitalize font-semibold inline-block w-[436.52px] h-[106.97px] shrink-0">
                Collaborative workflows
              </div>
              <div className="relative text-xl leading-[180%] font-body-b1-20px-regular inline-block w-[484px] h-[175px] shrink-0">
                Share artefacts easily and collaborate with team members,
                auditors, and pen testers via automated procedures. To manage
                daily compliance with automatic notifications and reminders,
                create, assign, and track tasks.
              </div>
            </div>
          </div>
          <img
            className="relative w-[565.33px] h-[518.1px]"
            alt=""
            src="/cards-screen1.svg"
          />
        </div>
      </div>
      <div className="absolute top-[5613px] left-[165px] rounded-16xl bg-background-white box-border w-[1398px] h-[3603px] text-base text-text-bright-grey border-[1px] border-solid border-background-white">
        <div className="absolute top-[110px] left-[calc(50%_-_557px)] text-25xl leading-[125%] font-semibold text-gray-200 flex items-center justify-center w-[1115px] h-[90px]">{`The Xerocodee way `}</div>
        <img
          className="absolute top-[130px] left-[940px] w-[50px] h-[50px] overflow-hidden"
          alt=""
          src="/rocket.svg"
        />
        <div className="absolute top-[282px] left-[142px] w-[1115px] h-[639px] text-xs text-text-purple-haze font-nunito">
          <div className="absolute top-[0px] left-[calc(50%_-_557.5px)] text-17xl leading-[125%] font-semibold font-heading-h3-44px-semibold text-gray-200 flex items-center justify-center w-[1115px] h-[90px]">
            01
          </div>
          <img
            className="absolute top-[67.67px] left-[calc(50%_-_42.83px)] w-[84.67px] h-[10.67px]"
            alt=""
            src="/line-38.svg"
          />
          <div className="absolute top-[206px] left-[calc(50%_-_386.5px)] text-base leading-[180%] text-text-mid-grey inline-block w-[773px] h-[26px]">
            {" "}
            Accelerate by self-serving production-ready infrastructure and
            customize as you scale.
          </div>
          <div className="absolute top-[160px] left-[calc(50%_-_236.5px)] text-5xl leading-[160%] capitalize font-semibold font-heading-h3-44px-semibold text-text-bright-grey inline-block w-[472px] h-[30px]">
            Self serve Infrastructure
          </div>
          <div className="absolute top-[494px] left-[calc(50%_+_7.5px)] text-base leading-[180%] text-text-mid-grey text-left inline-block w-[550px] h-[53px]">
            Your infrastructure runs on your AWS or GCP account. Never get
            locked in. Infinitely scalable.Azure support coming soon)
          </div>
          <div className="absolute top-[448px] left-[calc(50%_+_7.5px)] text-xl leading-[160%] capitalize font-semibold font-heading-h3-44px-semibold text-text-bright-grey text-left inline-block w-[335px] h-[30px]">
            In Your Cloud
          </div>
          <div className="absolute top-[303px] left-[284px] rounded-10xs bg-background-white box-border w-[120px] h-8 border-[1px] border-solid border-whitesmoke-200" />
          <b className="absolute top-[303px] left-[284px] leading-[150%] capitalize flex items-center justify-center w-[120px] h-[31px]">
            Self-hosted Apps
          </b>
          <div className="absolute top-[334px] left-[0px] rounded-10xs bg-royalblue w-[120px] h-[5px]" />
          <b className="absolute top-[302px] left-[0px] leading-[150%] capitalize flex items-center justify-center w-[120px] h-[33px]">
            Your Cloud
          </b>
          <div className="absolute top-[303px] left-[142px] rounded-10xs bg-background-white box-border w-[120px] h-8 border-[1px] border-solid border-whitesmoke-200" />
          <b className="absolute top-[303px] left-[142px] leading-[150%] capitalize flex items-center justify-center w-[120px] h-8">
            Infra components
          </b>
          <img
            className="absolute top-[339px] left-[67px] w-[400px] h-[300px]"
            alt=""
            src="/group-25415.svg"
          />
        </div>
        <div className="absolute top-[2469.25px] left-[calc(50%_-_557px)] text-17xl leading-[125%] font-semibold text-gray-200 flex items-center justify-center w-[1115px] h-[90px]">
          03
        </div>
        <img
          className="absolute top-[2536.91px] left-[calc(50%_-_42.33px)] w-[84.67px] h-[10.67px]"
          alt=""
          src="/line-40.svg"
        />
        <div className="absolute top-[2675px] left-[calc(50%_-_509px)] leading-[180%] font-nunito text-text-mid-grey inline-block w-[1018px] h-[26px]">
          Automatically track resource costs, across clouds, on every change.
          Visualize k8s pod metrics - CPU, Network, and Memory.
        </div>
        <div className="absolute top-[2629.25px] left-[calc(50%_-_236px)] text-5xl leading-[160%] capitalize font-semibold inline-block w-[472px] h-[30px]">
          Visibility into costs and metrics
        </div>
        <div className="absolute top-[1007px] left-[calc(50%_-_550px)] text-17xl leading-[125%] font-semibold text-gray-200 flex items-center justify-center w-[1115px] h-[90px]">
          02
        </div>
        <img
          className="absolute top-[1074.67px] left-[calc(50%_-_35.33px)] w-[84.67px] h-[10.67px]"
          alt=""
          src="/line-38.svg"
        />
        <div className="absolute top-[1213px] left-[calc(50%_-_379px)] leading-[180%] font-nunito text-text-mid-grey inline-block w-[773px] h-[26px]">
          Set up automated deployments of your application in 5 minutes and get
          back to building stuff that matters.
        </div>
        <div className="absolute top-[1167px] left-[calc(50%_-_229px)] text-5xl leading-[160%] font-semibold inline-block w-[472px] h-[30px]">
          Deploy applications, fast!
        </div>
        <div className="absolute top-[2837px] left-[calc(50%_+_12px)] leading-[180%] font-nunito text-text-mid-grey text-left inline-block w-[550px] h-[76px]">
          Stay on top of your cloud spending with custom cost dashboards and
          reports — sort, filter, and group by your various accounts, resources,
          and cloud regions.
        </div>
        <div className="absolute top-[2791px] left-[calc(50%_+_12px)] text-xl leading-[160%] capitalize font-semibold text-left inline-block w-[479px] h-[30px]">
          Customizable cost dashboards and reports
        </div>
        <div className="absolute top-[3087px] left-[calc(50%_-_560px)] leading-[180%] font-nunito text-text-mid-grey text-left inline-block w-[551px] h-[76px]">
          See the cost of a specific resource while choosing it (before
          provisioning). It saves you the hassle of searching through the
          complex pricing pages of your cloud provider or tools.
        </div>
        <div className="absolute top-[3041px] left-[calc(50%_-_558px)] text-xl leading-[160%] capitalize font-semibold text-left inline-block w-[444px] h-[30px]">
          Preview infra costs
        </div>
        <div className="absolute top-[3356px] left-[calc(50%_+_4px)] leading-[180%] font-nunito text-text-mid-grey text-left inline-block w-[550px] h-[108px]">
          Comes with built-in Kubernetes pod metrics. Easily plug in monitoring
          and observability tools of your choice, such as Grafana/Loki, DataDog,
          Prometheus, and more. Stay on top of your application metrics from day
          1.
        </div>
        <div className="absolute top-[3310px] left-[calc(50%_+_4px)] text-xl leading-[160%] capitalize font-semibold text-left inline-block w-[444px] h-[30px]">
          Observability from day one
        </div>
        <div className="absolute top-[1330px] left-[140px] w-[1124px] h-[947.25px] text-left font-nunito">
          <div className="absolute top-[46px] left-[calc(50%_+_12px)] leading-[180%] text-text-mid-grey inline-block w-[550px] h-[76px]">
            Portable builds powered by Dagger and continuous deployments powered
            by ArgoCD - you gain more control of your pipelines with composable
            custom, build, and deploy stages.
          </div>
          <div className="absolute top-[0px] left-[calc(50%_+_12px)] text-xl leading-[160%] capitalize font-semibold font-heading-h3-44px-semibold inline-block w-[444px] h-[30px]">
            Configurable Build and Deploy pipelines
          </div>
          <div className="absolute top-[296px] left-[calc(50%_-_562px)] leading-[180%] text-text-mid-grey inline-block w-[551px] h-[76px]">
            Just connect your repo with one click and push. Argonaut’s deep
            integration with GitHub Actions and GitLab pipelines build and
            deploy your code on every push.
          </div>
          <div className="absolute top-[250px] left-[calc(50%_-_560px)] text-xl leading-[160%] capitalize font-semibold font-heading-h3-44px-semibold inline-block w-[444px] h-[30px]">
            Push to Deploy
          </div>
          <div className="absolute top-[22.81px] left-[calc(50%_-_560px)] w-[406px] h-[133.43px] text-center text-5xs font-heading-h3-44px-semibold">
            <div className="absolute top-[40.19px] left-[calc(50%_-_169px)] leading-[160%] capitalize font-medium inline-block w-10 h-[11px]">
              Build
            </div>
            <div className="absolute top-[40.19px] left-[calc(50%_-_30px)] leading-[160%] capitalize font-medium inline-block w-[59px] h-[11px]">
              Deploy
            </div>
            <div className="absolute top-[40.19px] left-[calc(50%_+_119px)] leading-[160%] capitalize font-medium inline-block w-[58px] h-[11px]">
              Deploy
            </div>
            <img
              className="absolute h-[69.92%] w-[26.85%] top-[30.08%] right-[73.15%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
            <img
              className="absolute h-[69.92%] w-[26.85%] top-[30.08%] right-[0%] bottom-[0%] left-[73.15%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
            <img
              className="absolute h-[69.92%] w-[26.6%] top-[30.08%] right-[36.7%] bottom-[0%] left-[36.7%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
            <img
              className="absolute h-[12.03%] w-[9.61%] top-[61.65%] right-[63.55%] bottom-[26.32%] left-[26.85%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
            <img
              className="absolute h-[12.03%] w-[9.85%] top-[61.65%] right-[26.85%] bottom-[26.32%] left-[63.3%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector3.svg"
            />
            <img
              className="absolute h-[31.58%] w-[2.22%] top-[0%] right-[49.01%] bottom-[68.42%] left-[48.77%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector4.svg"
            />
            <img
              className="absolute h-[5.26%] w-[14.04%] top-[0%] right-[37.19%] bottom-[94.74%] left-[48.77%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector5.svg"
            />
          </div>
          <div className="absolute top-[242px] left-[calc(50%_+_53px)] w-[491px] h-[177.99px] text-center text-xs text-black">
            <div className="absolute top-[102px] left-[calc(50%_-_240.5px)] leading-[180%] inline-block w-[47px] h-[19px]">
              Git Push
            </div>
            <div className="absolute top-[101px] left-[calc(50%_+_198.5px)] leading-[180%] inline-block w-[47px] h-[19px]">
              Deploy
            </div>
            <img
              className="absolute h-[3.95%] w-[14.46%] top-[46.51%] right-[20.98%] bottom-[49.54%] left-[64.56%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector6.svg"
            />
            <img
              className="absolute h-[3.95%] w-[14.46%] top-[43.13%] right-[51.53%] bottom-[52.92%] left-[34.01%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector7.svg"
            />
            <img
              className="absolute h-[39.08%] w-[18.12%] top-[43.13%] right-[65.18%] bottom-[17.78%] left-[16.7%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector8.svg"
            />
            <img
              className="absolute h-[35.93%] w-[16.64%] top-[47.27%] right-[21.12%] bottom-[16.81%] left-[62.24%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector9.svg"
            />
            <img
              className="absolute h-[3.95%] w-[15.07%] top-[57.22%] right-[72.51%] bottom-[38.83%] left-[12.42%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector10.svg"
            />
            <img
              className="absolute h-[3.95%] w-[14.46%] top-[57.22%] right-[12.22%] bottom-[38.83%] left-[73.32%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector11.svg"
            />
            <img
              className="absolute h-[3.95%] w-[14.46%] top-[79.21%] right-[68.84%] bottom-[16.85%] left-[16.7%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector12.svg"
            />
            <img
              className="absolute h-[3.95%] w-[14.46%] top-[79.21%] right-[36.86%] bottom-[16.85%] left-[48.68%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector12.svg"
            />
            <img
              className="absolute h-[23.61%] w-[10.18%] top-[76.39%] right-[54.38%] bottom-[0%] left-[35.44%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-25417.svg"
            />
            <img
              className="absolute h-[23.61%] w-[10.18%] top-[38.62%] right-[38.49%] bottom-[37.77%] left-[51.32%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-25418.svg"
            />
            <img
              className="absolute top-[0px] left-[255px] w-[45.13px] h-[45.13px]"
              alt=""
              src="/group-25419.svg"
            />
            <img
              className="absolute h-[14.89%] w-[5.51%] top-[56.86%] right-[57.01%] bottom-[28.25%] left-[37.48%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-25420.svg"
            />
            <img
              className="absolute top-[61px] left-[448px] w-10 h-10 overflow-hidden"
              alt=""
              src="/react.svg"
            />
            <div className="absolute top-[57px] left-[0px] text-5xl leading-[160%] capitalize font-medium font-heading-h3-44px-semibold flex items-center justify-center w-[57px] h-[47px]">{`</>`}</div>
          </div>
          <div className="absolute top-[565px] left-[calc(50%_+_4px)] leading-[180%] text-text-mid-grey inline-block w-[550px] h-[108px]">
            Quickly deploy apps to containerized or serverless runtimes on your
            cloud and customize architectures to cost and performance
            constraints. Deploy on Kubernetes using dockerfiles or buildpacks,
            AWS Lambda, or GCP Cloud Functions.
          </div>
          <div className="absolute top-[519px] left-[calc(50%_+_4px)] text-xl leading-[160%] capitalize font-semibold font-heading-h3-44px-semibold inline-block w-[444px] h-[30px]">
            Multiple runtimes
          </div>
          <div className="absolute top-[840px] left-[calc(50%_-_562px)] leading-[180%] text-text-mid-grey inline-block w-[551px] h-[95px]">
            Every deployment is a zero-downtime deployment without you needing
            to choose custom configurations. You can easily configure
            auto-scaling, resource limits, and health-check URL to further
            optimize application uptime.
          </div>
          <div className="absolute top-[794px] left-[calc(50%_-_560px)] text-xl leading-[160%] capitalize font-semibold font-heading-h3-44px-semibold inline-block w-[444px] h-[30px]">
            Scale infinitely
          </div>
          <div className="absolute top-[523px] left-[2px] w-[406px] h-[150px]">
            <div className="absolute top-[63px] left-[0px] rounded-3xs [background:linear-gradient(180deg,_#c6deff,_rgba(255,_255,_255,_0))] box-border w-20 h-20 border-[1px] border-solid border-lightsteelblue-200" />
            <div className="absolute top-[90px] left-[346px] rounded-3xs [background:linear-gradient(180deg,_#c6deff,_rgba(255,_255,_255,_0))] box-border w-[60px] h-[60px] border-[1px] border-solid border-lightsteelblue-200" />
            <div className="absolute top-[0px] left-[279px] rounded-3xs [background:linear-gradient(180deg,_#c6deff,_rgba(255,_255,_255,_0))] box-border w-20 h-20 border-[1px] border-solid border-lightsteelblue-200" />
            <div className="absolute top-[11px] left-[120px] rounded-3xs [background:linear-gradient(180deg,_#c6deff,_rgba(255,_255,_255,_0))] box-border w-[120px] h-[120px] border-[1px] border-solid border-lightsteelblue-200" />
            <img
              className="absolute top-[28px] left-[135px] w-[90px] h-[90px] object-cover"
              alt=""
              src="/toolsobservabilitygrafana@2x.png"
            />
            <img
              className="absolute top-[75px] left-[10px] w-[60px] h-[60px] object-cover"
              alt=""
              src="/toolsdeliveryazure@2x.png"
            />
            <img
              className="absolute top-[17px] left-[295px] w-[50px] h-[50px] object-cover"
              alt=""
              src="/toolsdeliverygitlab@2x.png"
            />
            <img
              className="absolute top-[107.12px] left-[359.32px] w-[32.49px] h-[32.49px] overflow-hidden"
              alt=""
              src="/redis.svg"
            />
          </div>
          <div className="absolute top-[807px] left-[580px] w-[520px] h-[140.25px]">
            <img
              className="absolute top-[2px] left-[313px] w-[72px] h-[69.35px] object-cover"
              alt=""
              src="/image-30@2x.png"
            />
            <img
              className="absolute top-[2px] left-[397px] w-[72px] h-[69.35px] object-cover"
              alt=""
              src="/image-30@2x.png"
            />
            <img
              className="absolute top-[7.4px] left-[338.4px] w-[24.3px] h-[21.6px] object-cover"
              alt=""
              src="/toolsdeliveryazure1@2x.png"
            />
            <img
              className="absolute top-[6.5px] left-[422.2px] w-[21.6px] h-[22.5px] object-cover"
              alt=""
              src="/toolsobservabilitygrafana1@2x.png"
            />
            <img
              className="absolute top-[70.9px] left-[366px] w-[72px] h-[69.35px] object-cover"
              alt=""
              src="/image-32@2x.png"
            />
            <img
              className="absolute top-[70.9px] left-[448px] w-[72px] h-[69.35px] object-cover"
              alt=""
              src="/image-32@2x.png"
            />
            <img
              className="absolute top-[76.3px] left-[389.4px] w-[24.3px] h-[21.6px] object-cover"
              alt=""
              src="/toolsdeliveryazure2@2x.png"
            />
            <img
              className="absolute top-[75.4px] left-[473.2px] w-[21.6px] h-[22.5px] object-cover"
              alt=""
              src="/toolsobservabilitygrafana2@2x.png"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[300px] h-[131.06px] object-cover"
              alt=""
              src="/image-34@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[2766px] left-[calc(50%_-_417px)] w-[130px] h-[186px] text-right text-[14px]">
          <div className="absolute top-[156px] left-[calc(50%_-_62px)] leading-[160%] capitalize font-semibold inline-block w-[127px] h-[30px]">
            Total - $1272
          </div>
          <img
            className="absolute top-[20px] left-[0px] w-[130px] h-[137.19px] object-cover"
            alt=""
            src="/image-35@2x.png"
          />
          <div className="absolute top-[0px] left-[76px] rounded-mini bg-lavender box-border w-[54px] h-5 border-[0.5px] border-solid border-dodgerblue-100" />
          <b className="absolute top-[0px] left-[84px] text-xs leading-[150%] capitalize flex font-nunito text-dodgerblue-100 text-center items-center justify-center w-[39px] h-5">
            -23%
          </b>
          <img
            className="absolute top-[156px] left-[9px] w-[25px] h-[25px]"
            alt=""
            src="/group-25437.svg"
          />
        </div>
        <img
          className="absolute h-[5.96%] w-[18.53%] top-[84.26%] right-[25.89%] bottom-[9.77%] left-[55.58%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-25480.svg"
        />
        <img
          className="absolute top-[3340px] left-[142px] w-[200px] h-[140.75px] object-cover"
          alt=""
          src="/image-37@2x.png"
        />
        <img
          className="absolute top-[3368px] left-[347px] w-[203px] h-[108px]"
          alt=""
          src="/group-25481.svg"
        />
      </div>
      <div className="absolute top-[9216px] left-[0px] w-[1728px] h-[610px] text-text-bright-grey">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(0deg,_rgba(255,_255,_255,_0.01),_rgba(255,_255,_255,_0))] [backdrop-filter:blur(40px)] w-[1728px] h-[610px]">
          <div className="absolute top-[120px] left-[calc(50%_-_281px)] leading-[140%] capitalize font-semibold inline-block w-[562px]">
            See our success stories
          </div>
          <img
            className="absolute top-[352px] left-[1481px] w-[46px] h-[46px]"
            alt=""
            src="/group-53.svg"
          />
          <img
            className="absolute top-[352px] left-[207px] w-[46px] h-[46px]"
            alt=""
            src="/group-25317.svg"
          />
          <img
            className="absolute top-[315px] left-[1242px] rounded-[50%] w-[120px] h-[120px] object-cover"
            alt=""
            src="/image@2x.png"
          />
          <div className="absolute top-[262px] left-[306px] shadow-[5px_5px_15px_rgba(0,_0,_0,_0.1),_-5px_-5px_15px_rgba(0,_0,_0,_0.1)_inset] w-[1115px] h-[230px] text-[176px] text-gray-200 font-nunito">
            <div className="absolute top-[0px] left-[154px] rounded-tl-none rounded-tr-mini rounded-br-mini rounded-bl-none bg-gray-300 w-[961px] h-[230px]" />
            <div className="absolute top-[0px] left-[0px] w-[155px] h-[230px] text-background-white">
              <img
                className="absolute top-[0px] left-[0px] w-[155px] h-[230px]"
                alt=""
                src="/background.svg"
              />
              <div className="absolute top-[60.47px] left-[41px] leading-[110%] font-extrabold inline-block w-[84px] h-[71.07px]">
                “
              </div>
            </div>
            <div className="absolute top-[0px] left-[189px] w-[644px] h-36 overflow-hidden flex flex-col items-center justify-end text-left text-lg">
              <div className="relative leading-[157.4%] inline-block w-[644px]">
                <p className="m-0">
                  There are many variations of passages of Lorem Ipsum available
                </p>
                <p className="m-0">
                  but the majority have sufferg alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage.
                </p>
              </div>
            </div>
            <div className="absolute top-[0px] left-[189px] w-[644px] h-[210px] overflow-hidden flex flex-col items-center justify-end text-right text-xl">
              <div className="relative leading-[157.4%] inline-block w-[644px]">
                <p className="m-0">
                  <span className="text-lg font-nunito">-</span>
                  <span className="font-semibold">Abcdefgh Ijklmnop</span>
                </p>
                <p className="m-0 text-lg">Frontend Engineer</p>
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[926px] w-[140px] h-[183px] overflow-hidden"
              alt=""
              src="/frame1.svg"
            />
            <img
              className="absolute top-[0px] left-[936px] w-[120px] h-[173px] overflow-hidden"
              alt=""
              src="/frame2.svg"
            />
          </div>
        </div>
        <img
          className="absolute top-[501px] left-[calc(50%_-_30px)] w-[60px] h-[60px]"
          alt=""
          src="/iconinfo.svg"
        />
      </div>
      <div className="absolute top-[10991px] left-[0px] bg-lightsteelblue-300 [backdrop-filter:blur(40px)] w-[1728px] h-[550px] flex flex-col items-start justify-start pt-[75px] px-[307px] pb-[60px] box-border gap-[80px] text-left text-base font-body-b1-20px-regular">
        <div className="relative w-[1098px] h-[303px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[950px] w-[148px] h-[270px] flex flex-col items-start justify-start gap-[12px]">
            <div className="w-[148px] h-[106px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[39px] text-5xl text-text-bright-grey font-heading-h3-44px-semibold">
              <div className="relative leading-[160%] capitalize font-semibold">
                Others links
              </div>
              <div className="relative text-base leading-[180%] font-body-b1-20px-regular text-text-purple-haze">
                FAQ
              </div>
            </div>
            <div className="w-[99px] h-[70px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[180%]">Careers</div>
              <div className="relative leading-[180%]">Privacy Ploicy</div>
            </div>
            <div className="w-[132px] h-[70px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[180%]">{`Trems & Condition`}</div>
              <div className="relative leading-[180%]">Support</div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[603px] w-[248px] h-[270px] flex flex-col items-start justify-start gap-[12px]">
            <div className="w-[189px] h-[106px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[39px] text-5xl text-text-bright-grey font-heading-h3-44px-semibold">
              <div className="relative leading-[160%] capitalize font-semibold">
                Our Services
              </div>
              <a
                className="relative text-base leading-[180%] font-body-b1-20px-regular text-text-purple-haze [text-decoration:none]"
                href="https://www.hashicorp.com/solutions/infrastructure-provisioning"
                target="_blank"
              >
                Infrastructure provisioning
              </a>
            </div>
            <div className="w-[248px] h-[70px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[180%]">
                Network infrastructure automation
              </div>
              <div className="relative leading-[180%]">Cost optimization</div>
            </div>
            <div className="w-[141px] h-[70px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[180%]">Cloud migration</div>
              <div className="relative leading-[180%]">Kubernetes at scale</div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[376px] w-[111px] h-[270px] flex flex-col items-start justify-start gap-[12px]">
            <div className="w-[111px] h-[106px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[39px] text-5xl text-text-bright-grey font-heading-h3-44px-semibold">
              <div className="relative leading-[160%] capitalize font-semibold">
                Our links
              </div>
              <div className="relative text-base leading-[180%] font-body-b1-20px-regular text-text-purple-haze">
                Home
              </div>
            </div>
            <div className="w-[88px] h-[70px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[180%]">About us</div>
              <div className="relative leading-[180%] font-semibold text-royalblue">
                Integrations
              </div>
            </div>
            <div className="w-10 h-[70px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[12px]">
              <div className="relative leading-[180%]">Team</div>
              <div className="relative leading-[180%]">Blog</div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-80 h-[303px] overflow-hidden flex flex-col items-center justify-end">
            <div className="w-80 h-[233px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[47px]">
              <div className="relative leading-[180%]">
                <p className="m-0">
                  You get just what you need to run your cloud
                </p>
                <p className="m-0">{`workloads--no more, no less. `}</p>
                <p className="m-0">{`Deploy from our single pane of glass, `}</p>
                <p className="m-0">{`manage them with ease and scale `}</p>
                <p className="m-0">up as fast as your workload grows</p>
              </div>
              <img
                className="relative w-52 h-[41px] overflow-hidden shrink-0"
                alt=""
                src="/frame3.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[1114px] h-8 flex flex-row items-center justify-start gap-[247px] text-lg text-text-mid-grey">
          <div className="relative leading-[180%] inline-block w-[318px] shrink-0">{`Terms & Condition  |   Privacy Policy `}</div>
          <div className="relative leading-[180%] inline-block w-[549px] shrink-0">
            <span>{`Copyright © 2023 `}</span>
            <b>{`EXOCODE TECHNOLOGIES | `}</b>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
      <div className="absolute top-[16px] left-[165px] rounded-3xs bg-background-white shadow-[10px_10px_15px_rgba(0,_0,_0,_0.1)] box-border w-[1398px] h-[81px] overflow-hidden flex flex-row items-center justify-start pt-[21px] px-[117.204345703125px] pb-5 gap-[33px] text-left text-lg text-gray-200 font-body-b1-20px-regular border-[1px] border-solid border-gainsboro">
        <div className="w-[485.14px] h-10 overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[269px]">
          <img
            className="relative w-[164.84px] h-10 object-cover"
            alt=""
            src="/logo-4-1@2x.png"
          />
          <div className="relative leading-[180%] flex items-center w-[50.76px] h-[21px] shrink-0">
            Home
          </div>
        </div>
        <div className="w-[152.28px] h-[21px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[33px]">
          <div className="relative leading-[180%] flex items-center w-[50.76px] h-[21px] shrink-0">
            Team
          </div>
          <div className="relative leading-[180%] flex items-center w-[68.24px] h-[21px] shrink-0">
            Contact
          </div>
        </div>
        <div className="w-[458.8px] h-[39.23px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[264px]">
          <div className="relative leading-[180%] flex items-center w-[81px] h-[21px] shrink-0">
            Careers
          </div>
          <div className="rounded-8xs box-border w-[113.3px] flex flex-col items-center justify-end text-center text-royalblue font-nunito border-[2px] border-solid border-royalblue">
            <div className="relative leading-[150%] capitalize font-medium flex items-center justify-center w-[113.3px] h-[39.23px] shrink-0">
              Sign In
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1832px] left-[306px] w-[1116px] overflow-hidden flex flex-col items-end justify-center text-xs font-nunito">
        <div className="w-[1114px] h-[37px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[22px]">
          <div className="w-[120px] h-[37px] overflow-hidden shrink-0 flex flex-col items-center justify-start">
            <b className="relative leading-[150%] capitalize flex items-center justify-center w-[120px] h-[33px] shrink-0">
              Apps
            </b>
            <div className="relative rounded-10xs bg-royalblue w-[120px] h-[5px] mt-[-1px]" />
          </div>
          <div className="rounded-10xs bg-background-white box-border w-[120px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-whitesmoke-200">
            <b className="relative leading-[150%] capitalize flex items-center justify-center w-[120px] h-8 shrink-0">
              App Configs
            </b>
          </div>
          <div className="rounded-10xs bg-background-white box-border w-[120px] h-8 overflow-hidden shrink-0 flex flex-col items-center justify-start border-[1px] border-solid border-whitesmoke-200">
            <b className="relative leading-[150%] capitalize flex items-center justify-center w-[120px] h-[31px] shrink-0">
              Pipelines
            </b>
          </div>
          <div className="rounded-10xs bg-background-white box-border w-[120px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-whitesmoke-200">
            <b className="relative leading-[150%] capitalize flex items-center justify-center w-[120px] h-8 shrink-0">
              Infra Creation
            </b>
          </div>
          <div className="rounded-10xs bg-background-white box-border w-[120px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-whitesmoke-200">
            <b className="relative leading-[150%] capitalize flex items-center justify-center w-[120px] h-8 shrink-0">
              Cost
            </b>
          </div>
          <div className="rounded-10xs bg-background-white box-border w-[120px] h-8 overflow-hidden shrink-0 flex flex-col items-center justify-start border-[1px] border-solid border-whitesmoke-200">
            <b className="relative leading-[150%] capitalize flex items-center justify-center w-[120px] h-[31px] shrink-0">
              Add-ons
            </b>
          </div>
          <div className="rounded-10xs bg-background-white box-border w-[120px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-whitesmoke-200">
            <b className="relative leading-[150%] capitalize flex items-center justify-center w-[120px] h-8 shrink-0">
              Monitoring
            </b>
          </div>
          <div className="rounded-10xs bg-background-white box-border w-[120px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-whitesmoke-200">
            <b className="relative leading-[150%] capitalize flex items-center justify-center w-[120px] h-8 shrink-0">
              Connections
            </b>
          </div>
        </div>
      </div>
      <div className="absolute top-[1925px] left-[215px] w-[1298px] h-[666.49px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[1288px] h-[666.49px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[115px] w-[1173px] h-[666.49px]"
            alt=""
            src="/vector-17.svg"
          />
          <div className="absolute top-[38px] left-[249px] rounded-6xl bg-whitesmoke-100 shadow-[-5px_-5px_15px_rgba(0,_0,_0,_0.15)_inset] w-[800px] h-[528.98px] flex flex-col items-center justify-center">
            <img
              className="relative rounded-6xl w-[767.75px] h-[489.56px] object-cover"
              alt=""
              src="/group-25307-1@2x.png"
            />
          </div>
          <div className="absolute top-[402px] left-[48px] rounded-6xl bg-whitesmoke-100 shadow-[-5px_-5px_15px_rgba(0,_0,_0,_0.15)_inset,_5px_5px_20px_rgba(0,_0,_0,_0.15)] w-[400px] h-[264.49px] flex flex-col items-center justify-start py-[9.212890625px] px-0 box-border">
            <img
              className="relative rounded-6xl w-[383.88px] h-[244.81px] object-cover"
              alt=""
              src="/cd-1@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[924px] rounded-6xl bg-whitesmoke-100 shadow-[-5px_-5px_15px_rgba(0,_0,_0,_0.15)_inset,_15px_15px_25px_rgba(0,_0,_0,_0.08)] w-[300px] h-[198.37px] flex flex-col items-center justify-center">
            <img
              className="relative rounded-6xl w-[287.91px] h-[183.61px] object-cover"
              alt=""
              src="/database-3@2x.png"
            />
          </div>
          <img
            className="absolute top-[491px] left-[1159px] w-[129px] h-[76px]"
            alt=""
            src="/rectangle-325.svg"
          />
          <div className="absolute top-[560px] left-[1065px] rounded-tl-none rounded-tr-101xl rounded-b-101xl bg-lightsteelblue-100 w-[211px] h-[100px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
          <div className="absolute top-[41px] left-[232px] rounded-tl-none rounded-tr-101xl rounded-b-101xl bg-lightsteelblue-100 w-[211px] h-[101px] [transform:_rotate(90deg)] [transform-origin:0_0]" />
          <div className="absolute top-[57px] left-[130px] rounded-tl-none rounded-tr-101xl rounded-b-101xl bg-royalblue w-[130px] h-[77px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
        </div>
      </div>
      <div className="absolute top-[2712px] left-[304px] w-[1120px] overflow-hidden flex flex-col items-start justify-center text-9xl text-gray-200 font-nunito">
        <div className="relative w-[1117px] h-[31px] overflow-hidden shrink-0">
          <b className="absolute top-[0px] left-[0px] leading-[110%] inline-block w-[346px]">
            Without Xerocodee
          </b>
          <b className="absolute top-[0px] left-[771px] leading-[110%] inline-block w-[346px]">
            With Xerocodee
          </b>
          <b className="absolute top-[0px] left-[0px] leading-[110%] inline-block w-[346px]">
            Without Xerocodee
          </b>
          <b className="absolute top-[0px] left-[771px] leading-[110%] inline-block w-[346px]">
            With Xerocodee
          </b>
        </div>
      </div>
      <img
        className="absolute top-[2810px] left-[947px] w-[494px] h-[450px] overflow-hidden"
        alt=""
        src="/63d346fd9332c07aca455046-with-argonaut-1.svg"
      />
      <img
        className="absolute h-[0.52%] w-[3.41%] top-[25.79%] right-[43.52%] bottom-[73.69%] left-[53.07%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector13.svg"
      />
      <img
        className="absolute h-[0.14%] w-[1.5%] top-[26.05%] right-[44.5%] bottom-[73.81%] left-[53.99%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector14.svg"
      />
      <img
        className="absolute h-[0.11%] w-[0.75%] top-[25.91%] right-[44.85%] bottom-[73.98%] left-[54.4%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector15.svg"
      />
      <img
        className="absolute h-[3.33%] w-[21.52%] top-[24.55%] right-[58.99%] bottom-[72.12%] left-[19.49%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-25482.svg"
      />
      <div className="absolute top-[3378px] left-[calc(50%_-_864px)] bg-gray-400 w-[1728px] h-[520px] overflow-hidden text-left text-base text-text-mid-grey">
        <div className="absolute top-[234px] left-[936px] rounded-mini bg-background-white shadow-[0px_20px_80px_rgba(0,_0,_0,_0.03)] w-[485px] h-[104px]" />
        <div className="absolute top-[286px] left-[1043px] leading-[180%] font-body-b1-20px-regular inline-block w-[333px] h-[26px]">
          Modern Secure Infrastructure Approach
        </div>
        <div className="absolute top-[254px] left-[1043px] text-5xl leading-[160%] capitalize font-semibold text-text-bright-grey inline-block w-[186px] h-[30px]">
          Security
        </div>
        <div className="absolute top-[250px] left-[952px] rounded-2xl bg-background-white shadow-[0px_25px_40px_rgba(0,_0,_0,_0.05),_0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[72px] h-[72px]" />
        <div className="absolute top-[375px] left-[307px] rounded-mini bg-background-white shadow-[0px_20px_80px_rgba(0,_0,_0,_0.03)] w-[485px] h-[104px] font-nunito">
          <div className="absolute top-[52px] left-[107px] leading-[180%] inline-block w-[345px] h-[26px]">
            Flexible Secure Application Connectivity
          </div>
          <div className="absolute top-[20px] left-[107px] text-5xl leading-[160%] capitalize font-semibold font-heading-h3-44px-semibold text-text-bright-grey inline-block w-[186px] h-[30px]">
            Networking
          </div>
          <div className="absolute top-[16px] left-[16px] rounded-2xl bg-background-white shadow-[0px_25px_40px_rgba(0,_0,_0,_0.05),_0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[72px] h-[72px]" />
        </div>
        <div className="absolute top-[375px] left-[936px] rounded-mini bg-background-white shadow-[0px_20px_80px_rgba(0,_0,_0,_0.03)] w-[485px] h-[104px] flex flex-row items-start justify-start py-4 px-0 box-border gap-[21px] text-5xl text-text-bright-grey">
          <div className="relative rounded-2xl bg-background-white shadow-[0px_25px_40px_rgba(0,_0,_0,_0.05),_0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[82.67px] h-[72px]" />
          <div className="w-[362.14px] h-[58px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[2px]">
            <div className="relative leading-[160%] capitalize font-semibold inline-block w-[245.71px] h-[30px] shrink-0">
              Applications
            </div>
            <div className="relative text-base leading-[180%] font-nunito text-text-mid-grey inline-block w-[362px] h-[26px] shrink-0">
              Automate Application Deployment for Agility
            </div>
          </div>
        </div>
        <div className="absolute top-[231px] left-[308px] rounded-mini bg-background-white shadow-[0px_20px_80px_rgba(0,_0,_0,_0.03)] w-[485px] h-[104px] font-nunito">
          <div className="absolute top-[52px] left-[107px] leading-[180%] inline-block w-[315px] h-[26px]">
            Automated Cloud Infrastructure Workflow
          </div>
          <div className="absolute top-[20px] left-[107px] text-5xl leading-[160%] capitalize font-semibold font-heading-h3-44px-semibold text-text-bright-grey inline-block w-[232px] h-[30px]">
            Infrastructure
          </div>
          <div className="absolute top-[16px] left-[16px] rounded-2xl bg-background-white shadow-[0px_25px_40px_rgba(0,_0,_0,_0.05),_0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[72px] h-[72px]" />
        </div>
        <img
          className="absolute top-[267px] left-[340px] w-10 h-10 object-cover"
          alt=""
          src="/infrastructure@2x.png"
        />
        <img
          className="absolute top-[267px] left-[968px] w-10 h-10 object-cover"
          alt=""
          src="/cybersecurity@2x.png"
        />
        <img
          className="absolute top-[407px] left-[339px] w-10 h-10 object-cover"
          alt=""
          src="/neuralnetwork@2x.png"
        />
        <img
          className="absolute top-[407px] left-[957px] w-10 h-10 object-cover"
          alt=""
          src="/development@2x.png"
        />
        <div className="absolute top-[81px] left-[calc(50%_-_557px)] text-25xl leading-[125%] font-semibold text-center flex items-center w-[1115px] h-[90px] text-gray-200">
          <span className="[line-break:anywhere] w-full">
            <span>{`Self serve infrastructure platform for `}</span>
            <span className="text-royalblue">scaling teams</span>
          </span>
        </div>
      </div>
      <div className="absolute top-[9882px] left-[149px] rounded-[60px] bg-lightsteelblue-100 [backdrop-filter:blur(40px)] w-[1398px] h-[680px] overflow-hidden text-gray-200">
        <img
          className="absolute top-[324px] left-[1px] w-[1398px] h-[356px] opacity-[0.08]"
          alt=""
          src="/mask-group.svg"
        />
        <img
          className="absolute top-[5px] left-[1px] w-[1398px] h-[319px] opacity-[0.08]"
          alt=""
          src="/mask-group1.svg"
        />
        <div className="absolute top-[268px] left-[256px] w-[885px] h-[180px] flex flex-col items-center justify-start gap-[20px]">
          <div className="relative leading-[140%] capitalize font-semibold inline-block w-[885px]">{`Subscribe to Our Newsletter & get the Coupon code.`}</div>
          <div className="relative text-xl leading-[180%] font-body-b1-20px-regular text-left opacity-[0.8]">
            All your information is completely confidential
          </div>
        </div>
        <img
          className="absolute top-[70px] left-[calc(50%_-_76px)] w-[150px] h-[150px] overflow-hidden"
          alt=""
          src="/paper-plane.svg"
        />
        <div className="absolute top-[508px] left-[354px] w-[691px] h-[83px] text-left text-xl text-text-mid-grey font-body-b1-20px-regular">
          <div className="absolute top-[0px] left-[0px] w-[491px] h-[83px]">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-background-white w-[491px] h-[72px]" />
            <div className="absolute top-[18px] left-[80px] leading-[180%] opacity-[0.6]">
              Type your email
            </div>
            <img
              className="absolute h-[28%] w-[6.11%] top-[72%] right-[88.59%] bottom-[0%] left-[5.3%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/icon.svg"
            />
          </div>
          <img
            className="absolute top-[0px] left-[506px] w-[185px] h-[83px]"
            alt=""
            src="/textfield.svg"
          />
          <div className="absolute top-[0px] left-[522px] text-5xl leading-[180%] font-extrabold text-background-white text-center flex items-center justify-center w-[154px] h-[72px]">
            Subscribe
          </div>
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-background-white w-[491px] h-[72px] flex flex-col items-start justify-end pt-[18px] px-0 pb-0 box-border">
            <div className="w-[168px] overflow-hidden flex flex-col items-end justify-center">
              <div className="relative leading-[180%] opacity-[0.6]">
                Type your email
              </div>
            </div>
            <img
              className="relative w-14 h-[20.44px] overflow-hidden shrink-0 mt-[-1px]"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[1194.01px] left-[0px] w-[1728px] h-[200px]">
        <img
          className="absolute top-[0px] left-[calc(50%_-_864px)] w-[1728px] h-[200px]"
          alt=""
          src="/icon.svg"
        />
        <div className="absolute top-[0px] left-[308px] w-[204.98px] h-[77.66px] overflow-hidden flex flex-col items-center justify-end">
          <img
            className="relative w-[204.98px] h-[49.66px] object-cover"
            alt=""
            src="/image-7@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[679px] w-[153.73px] h-[76.13px] overflow-hidden flex flex-col items-center justify-end">
          <img
            className="relative w-[153.73px] h-[39.13px] object-cover"
            alt=""
            src="/image-8@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[999px] w-[153.73px] h-[85.35px] overflow-hidden flex flex-col items-center justify-end">
          <img
            className="relative w-[153.73px] h-[57.35px] object-cover"
            alt=""
            src="/image-9@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[1319px] w-[102.49px] h-[80.23px] overflow-hidden flex flex-col items-center justify-end">
          <img
            className="relative w-[102.49px] h-[53.23px] object-cover"
            alt=""
            src="/image-10@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[308px] w-[204.98px] h-[175.66px] overflow-hidden flex flex-col items-center justify-end">
          <img
            className="relative w-[204.98px] h-[49.66px] object-cover"
            alt=""
            src="/image-7@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[679px] w-[153.73px] h-[174.13px] overflow-hidden flex flex-col items-center justify-end">
          <img
            className="relative w-[153.73px] h-[39.13px] object-cover"
            alt=""
            src="/image-8@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[999px] w-[153.73px] h-[183.35px] overflow-hidden flex flex-col items-center justify-end">
          <img
            className="relative w-[153.73px] h-[57.35px] object-cover"
            alt=""
            src="/image-9@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[1319px] w-[102.49px] h-[178.23px] overflow-hidden flex flex-col items-center justify-end">
          <img
            className="relative w-[102.49px] h-[53.23px] object-cover"
            alt=""
            src="/image-10@2x.png"
          />
        </div>
      </div>
    </a>
  );
};

export default Home;
