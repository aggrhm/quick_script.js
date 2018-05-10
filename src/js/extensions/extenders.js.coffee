QuickScript.initKOExtenders = ->

  ko.extenders.usd = (target) ->
    target.usd = ko.computed
      read : ->
        return null if !target()?
        target() / 100.0
      write : (val)->
        target(val * 100.0)
    target.usd_str = ko.computed
      read : ->
        return "$ -" if !target()?
        "$ #{target.usd().toFixed(2)}"
      deferEvaluation : true
    return target

  ko.extenders.date = (target) ->
    target.date = ko.computed
      read : ->
        t = target()
        return null if QS.utils.isBlank(t)
        return Date.from_utc(target())
      write : (val)->
        if !val?
          target(null)
        else
          target(val.to_utc())
      deferEvaluation : true
      pure: true
    target.date_str = ko.computed
      read : ->
        target.date().format('mmm d, yyyy')
      deferEvaluation : true
      pure: true
    target.ago_str = ko.computed
      read : ->
        "#{(new TimeLength(target.date())).toString()} ago"
      deferEvaluation : true
      pure: true
    target.moment = ko.computed
      read : ->
        t = target()
        return null if QS.utils.isBlank(t)
        return moment.unix(t)
      write: (val)=>
        if !val?
          target(null)
        else
          target(val.unix())
      deferEvaluation : true
      pure: true

    return target

  ko.extenders.errors = (target) ->
    target.has = (field)->
      return target()[field]?
    target.for = (field)->
      if target()[field]? then target()[field][0] else null
    target.any = ko.pureComputed ->
      !jQuery.isEmptyObject(target())
    return target

  ko.extenders.editable = (target) ->
    target.is_editing = ko.observable(false)
    target.edited = ko.observable()
    target.startEdit = ->
      target.edited(target())
      target.is_editing(true)
    target.cancelEdit = ->
      target.edited(target())
      target.is_editing(false)
    target.commitEdit = ->
      target(target.edited())
      target.is_editing(false)
    return target

  ko.extenders.bool = (target)->
    target.toggle = ->
      target(!target())
    return target

