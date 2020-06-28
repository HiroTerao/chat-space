$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Main-box">
          <div class="Main-info">
            <div class="Main-info__name">
              ${message.user_name}
            </div>
            <div class="Main-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Main-box">
        <div class="Main-info">
          <div class="Main-info__name">
            ${message.user_name}
          </div>
          <div class="Main-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    console.log()
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      
      $('.Chat-main__message-list').append(html);
      $('.Chat-main__message-list').animate({ scrollTop: $('.Chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
      $('.Form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop('disabled', false);
    })
  });
});