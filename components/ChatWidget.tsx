export default function ChatWidget() {
    const configScript = `
        window.spechyMessenger = {
                  base_url: "https://cw.spechy.com/",
                  uuid: "bZekI9a5hM8JHSNTfDxXQoPDqPe0MfgADhZCXzMgV73epkDWze",
                  id: 88,
                  lang: "en",
                  primary_color: "#0A0F8F",
                  icon_url: "https://storage.spechy.live/default/images/chat_widget/static_icons/chat-icon-1.svg",
                  launcher_type: "2",
                  launcher_text: "Chat",
                  alignment: "right", // left or right
                  platform: "1", 
                  chat_height: "50",
                  name_surname: "",
                  phone_number: "",
                  email_address: "",
                  auto_start: 0,
                };
    `;

    const loaderScript = `
        (function () {
        var w = window;
        var sm = w.spechyMessenger;
        if (typeof sm === "object") {
            var d = document;
            var s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = sm.base_url + '/messenger.js' + '?t=' + new Date().getTime();
            var x = d.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
        }
        })();
    `;
    // const crmScript = `
    //     (function(a,m,o,c,r,m){
    //         a[m]={id:"1070019",hash:"e98b7011d9d3caf18059389cf0f599ff0440ff44468ae7d9fabd87a8158a979d",
    //         locale:"en",setMeta:function(p){this.params=(this.params||[]).concat([p])}};
    //         a[o]=a[o]||function(){(a[o].q=a[o].q||[]).push(arguments)};
    //         var d=a.document,s=d.createElement('script');
    //         s.async=true;s.id=m+'_script';
    //         s.src='https://gso.kommo.com/js/button.js';
    //         d.head&&d.head.appendChild(s)
    //     }(window,0,'crmPlugin',0,0,'crm_plugin')
    // );`;

    return (
        <div>
            {/* <script dangerouslySetInnerHTML={{ __html: crmScript }} /> */}
            <script dangerouslySetInnerHTML={{ __html: configScript }} />
            <script dangerouslySetInnerHTML={{ __html: loaderScript }} />
        </div>
    );
}